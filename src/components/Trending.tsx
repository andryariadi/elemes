import axios from "axios";
import { lazy, Suspense } from "react";
import Loading from "./Loader";

const TrendingCard = lazy(() => import("./TrendingCard"));

const Trending = async () => {
  const { data: trendingMenu } = await axios.get("http://localhost:3000/api/trending");

  return (
    <section className="px-5 md:px-7 xl:px-10 2xl:px-[9.3rem] min-h-[calc(100vh-6.5rem)] space-y-12">
      {/* Ttile */}
      <div>
        <h1 className="text-black-1 text-2xl md:text-3xl lg:text-4xl font-semibold">Browser Our Trendings</h1>
        <span className="text-green-1 text-2xl md:text-3xl lg:text-4xl font-semibold">Receipt</span>
        {/* <span>Choose the one that best suits you</span> */}
      </div>

      {/* Trending Card */}
      <div>
        <Suspense fallback={<Loading />}>{<TrendingCard trendingMenu={trendingMenu} />}</Suspense>
      </div>
    </section>
  );
};

export default Trending;
