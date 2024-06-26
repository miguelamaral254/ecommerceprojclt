import { ProductType } from "@/types/ProductType";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col shadow-lg h-96 bg-sky-800/70 p-5 text-gray-300">
        <div className="relative max-h-72 flex-1">
          <ProductImage product={product} fill />
        </div>
        <div className="flex justify-between font-bold my-3">
          <p className="w-50 truncate">{product.name}</p>
          <p className="text-md text-teal-300">{formatPrice(product.price)}</p>
        </div>
        <button className="rounded-md bg-orange-400 text-white px-3.5 py-2.5 text-sm text-center">
          Add to cart
        </button>
      </div>
    </Link>
  );
}
