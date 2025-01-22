import { categoryMenu } from "@/constant";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="b-emerald-600 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {categoryMenu.map((category) => {
        let bgColor;

        if (category.title === "Cupcake") {
          bgColor = "bg-green-2";
        } else if (category.title === "Pizza") {
          bgColor = "bg-sky_walker-2";
        } else if (category.title === "Kebab") {
          bgColor = "bg-dark_blue-2";
        } else if (category.title === "Salmon") {
          bgColor = "bg-dark_pink-2";
        } else if (category.title === "Doughnut") {
          bgColor = "bg-light_green-2";
        }

        return (
          <figure key={category.title} className={`b-sky-600 group ${bgColor} relative flex flex-col items-center gap-5 py-5 rounded-md`}>
            {/* Background Image */}
            <div
              className="hidden group-hover:block transition-all duration-300 absolute -top-0 -left-0 -right-0 -bottom-0 bg-cover bg-center opacity-[0.1]"
              style={{
                backgroundImage: `url('/hero.png')`,
              }}
            />

            <div className="b-violet-700 relative left-0 top-0 w-full z-10 flex flex-col gap-y-5 items-center justify-center">
              <div className="b-emerald-500 size-16 flex items-center justify-center rounded-full border border-green-1/10 bg-green-1 bg-opacity-30">
                <Image src={category.icon} alt={category.title} width={35} height={35} />
              </div>

              <figcaption className="text-black-1 flex flex-col items-center">
                <span className="text-base">{category.title}</span>
                <span className="font-extralight text-xs">{category.items} items</span>
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default CategoryCard;
