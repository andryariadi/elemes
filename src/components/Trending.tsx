import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <section className="b-rose-600 px-[9.3rem] min-h-[calc(100vh-6.5rem)] space-y-12">
      {/* Ttile */}
      <div className="b-emerald-500">
        <h1 className="text-black-1 text-4xl font-semibold">Browser Our Category</h1>
        <span className="text-green-1 text-4xl font-semibold">Receipt</span>
        {/* <span>Choose the one that best suits you</span> */}
      </div>

      {/* Trending Card */}
      <div className="b-violet-500">{<TrendingCard />}</div>
    </section>
  );
};

export default Trending;
