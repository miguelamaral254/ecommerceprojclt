"use client";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);
  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  const formattedPrice = formatPrice(totalPrice);

  useEffect(() => {
    if (!stripe) return;
    if (!clientSecret) return;
  }, [clientSecret, stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          cartStore.setCheckout("success");
        }
        setLoading(false);
      });
  };

  const handleCancel = () => {
    cartStore.setCheckout("cart"); 
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <h1 className="p-4 bold">
        Please, enter card number: [4242 4242 4242 4242]
      </h1>
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <h1 className="py-4 font-bold text-teal-400">Total: {formattedPrice}</h1>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={!stripe || isLoading}
          className=" text-white font-bold border bg-orange-500 border-orange-600  py-2 px-4 rounded-md hover:bg-orange-400 hover:text-white"
        >
          {isLoading ? "Placing your order..." : "Place order"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-red-500 font-bold border border-red-700 text-white py-2 px-4 rounded-md ml-4 hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
