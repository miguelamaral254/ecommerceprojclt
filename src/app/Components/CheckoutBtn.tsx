"use client";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutBtnProps = {
  totalPrice: number;
};
export default function CheckoutBtn({ totalPrice }: CheckoutBtnProps) {
  const router = useRouter();
  const { user } = useUser();
  const cartStore = useCartStore();
  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart();
      router.push('/sign-in?redirectUrl=/');
      return;
    }
    cartStore.setCheckout("checkout");
  };
  return (
    <div>
      <p className="text-teal-500 font-bold">
        Total: {formatPrice(totalPrice)}
      </p>
      <button
        onClick={() => handleCheckout()}
        className="w-full rounded-md bg-orange-500   text-white py-2 mt-2"
      >
        Check out
      </button>
    </div>
  );
}
