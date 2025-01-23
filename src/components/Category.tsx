import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="b-amber-500 px-5 md:px-7 xl:px-10 2xl:px-[9.3rem] space-y-12">
      {/* Ttile */}
      <div className="b-emerald-500">
        <h1 className="text-black-1 text-2xl md:text-3xl lg:text-4xl font-semibold">Browser Our Category</h1>
        <span className="text-green-1 text-2xl md:text-3xl lg:text-4xl font-semibold">Receipt</span>
        {/* <span>Choose the one that best suits you</span> */}
      </div>

      {/* Category Card */}
      <div className="b-violet-500">
        <CategoryCard />
      </div>
    </section>
  );
};

export default Category;
