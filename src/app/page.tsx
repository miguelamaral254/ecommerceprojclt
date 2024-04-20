import { ProductType } from "@/types/ProductType";
import { Product } from "./Components/Product";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const products = await getProducts();
  //if don't work, execute:
  //console.log(products); 
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:p-0">
      <div
        className="
      pt-8
      grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 gap-10
      xl:gap-6">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
