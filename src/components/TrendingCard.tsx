import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import ButtonMotion from "./ButtonMotion";
import { trendingMenu } from "@/constant";

// type TrendingMenu = {
//   title: string;
//   img: string;
//   category: string;
//   star: number;
// };

const TrendingCard = () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      {/* Trending Card */}
      <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {trendingMenu.map((trending) => {
          const starNumber = trending.star;

          let bgColor;

          if (trending.category === "Cupcake") {
            bgColor = "bg-green-2 hover:bg-green-1/70";
          } else if (trending.category === "Pizza") {
            bgColor = "bg-sky_walker-2 hover:bg-sky_walker-1/70";
          } else if (trending.category === "Kebab") {
            bgColor = "bg-dark_blue-2 hover:bg-dark_blue-1/70";
          } else if (trending.category === "Salmon") {
            bgColor = "bg-dark_pink-2 hover:bg-dark_pink-1/70";
          } else if (trending.category === "Doughnut") {
            bgColor = "bg-light_green-2 hover:bg-light_green-1/70";
          }

          return (
            <figure key={trending.title} className={`${bgColor} transition-all duration-300 p-5 rounded-xl space-y-7 shadow-sm`}>
              {/* Image */}
              <div className="b-green-500 relative min-h-40 w-full rounded-xl  overflow-hidden">
                <Image src={trending.img} alt={trending.title} fill className="object-cover rounded-xl hover:scale-110 transition-all duration-300" />
              </div>

              {/* Deskripsi */}
              <figcaption className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center">
                  <span className="text-black-1 font-semibold text-lg">{trending.title}</span>
                  <span className="text-green-1 text-xs">{trending.category}</span>
                </div>

                {/* Rating Star */}
                <span className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, index) => {
                    return <IoMdStar key={index} size={12} className={index < starNumber ? "text-yellow-500" : "text-dark_gray"} />;
                  })}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Button Receipt */}
      <ButtonMotion title="All Receipt" btn />
    </div>
  );
};

export default TrendingCard;
