import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="b-amber-500 px-[9.3rem] space-y-7">
      {/* Ttile */}
      <div className="b-emerald-500">
        <h1 className="text-black-1 text-4xl font-semibold">Browser Our Category</h1>
        <span className="text-green-1 text-4xl font-semibold">Receipt</span>
        {/* <span>Choose the one that best suits you</span> */}
      </div>

      {/* Card Category */}
      <div className="b-violet-500">
        <CategoryCard />
      </div>
    </section>
  );
};

export default Category;
