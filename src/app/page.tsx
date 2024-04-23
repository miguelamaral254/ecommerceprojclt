import InfinityScroll from "./Components/InfinityScroll";
import Product from "./Components/Product";
import fetchProducts from "./actions";

export default async function Home() {
  const { formatedProducts } = await fetchProducts({});

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:p-0">
      <div
        className="
      pt-8
      grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 gap-10
      xl:gap-6"
      >
        <InfinityScroll initialProducts={formatedProducts}/>
      </div>
    </div>
  );
}
