"use client";

import { useCartStore } from "@/store";
import { useEffect } from "react";

function OrderCompleted() {
  const cartStore = useCartStore();
  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return (
    <div>
      <h1>The order was completed</h1>
      <button
        className="bg-orange-600 text-white py-2 px-4 rounded-md"
        onClick={() => {
          setTimeout(() => {
            cartStore.setCheckout("cart");
          }, 1000);
          cartStore.toggleCart();
        }}
      >
        Back to store
      </button>
    </div>
  );
}

export default OrderCompleted;
