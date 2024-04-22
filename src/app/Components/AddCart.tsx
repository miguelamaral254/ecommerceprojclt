"use client";
import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";
import Swal from "sweetalert2";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  const handleAddToCart = () => {
    addProduct(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1000,
    });

    {/* Redir to root " / " after add a item on cart */}
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <button
      onClick={() => handleAddToCart()}
      className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"
    >
      Add to cart
    </button>
  );
}
