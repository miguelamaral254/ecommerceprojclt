"use client";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";
import { motion } from "framer-motion";
import CheckoutButton from "./CheckoutBtn";
import Checkout from "./Checkout";
import OrderCompleted from "./OrderCompleted";
import NoItemsMessage from "./NoItems";

export default function CartDrawer() {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => useStore.toggleCart()}
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-slate-600 right-0 top-0 w-full md:w-1/3 h-screen p-8 overflow-y-scroll"
      >
        <button
          onClick={() => useStore.toggleCart()}
          className="font-bold text-sm border border-white py-2 px-3 text-white mb-4"
        >
          Back to store
        </button>
        <div className="border-t border-gray-400 my-4"></div>

        {useStore.cart.length === 0 && useStore.onCheckout === "cart" ? (
          <NoItemsMessage />
        ) : (
          <>
            {useStore.onCheckout === "cart" && (
              <>
                {useStore.cart.map((item) => (
                  <motion.div
                    animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
                    initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
                    exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 py-4"
                  >
                    <div className="md:w-24 md:self-start">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="object-cover w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-white truncate md:mt-0">
                        {item.name}
                      </h2>
                      <h2>Quantity: {item.quantity}</h2>
                      <p className="text-teal-600 text-sm font-bold">
                        {formatPrice(item.price)}
                      </p>
                      <div className="mt-2 flex flex-wrap">
                        <button
                          className="py-1 px-2 border text-white rounded-md mt-2 text-sm mr-1"
                          onClick={() => useStore.addProduct(item)}
                        >
                          Add +
                        </button>
                        <button
                          onClick={() => useStore.removeProduct(item)}
                          className="py-1 px-2 border text-white rounded-md mt-2 text-sm"
                        >
                          Remove -
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {useStore.cart.length > 0 && useStore.onCheckout === "cart" && (
              <CheckoutButton totalPrice={totalPrice} />
            )}

            {useStore.onCheckout === "checkout" && <Checkout />}
            {useStore.onCheckout === "success" && <OrderCompleted />}
          </>
        )}
      </div>
    </motion.div>
  );
}
