import SkeletonCard from "./Components/SkeletonCard";

export default function Product() {
  const skeletonCards = [];

  for (let i = 0; i < 12; i++) {
    skeletonCards.push(<SkeletonCard key={i} isLoading />);
  }

  return (
    <div className="max-w-7xl mx-auto pt-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {skeletonCards}
      </div>
    </div>
  );
}
