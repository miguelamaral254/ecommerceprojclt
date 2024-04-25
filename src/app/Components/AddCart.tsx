"use client";
import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();
  const router = useRouter();
  const handleAddToCart = () => {
    addProduct(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1000,
    });

    {
      /* Redir to root " / " after add a item on cart */
    }
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <button
      onClick={() => handleAddToCart()}
      className="rounded-md bg-orange-500 text-white px-3.5 py-2.5 text-sm text-center hover:bg-orange-400 transition-transform duration-300"
    >
      Add to cart
    </button>
  );
}
