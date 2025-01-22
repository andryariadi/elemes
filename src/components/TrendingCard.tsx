import { trendingMenu } from "@/constant";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const TrendingCard = () => {
  return (
    <div className="b-sky-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {trendingMenu.map((trending) => {
        const starNumber = trending.star;

        let bgColor;

        if (trending.category === "Cupcake") {
          bgColor = "bg-green-2";
        } else if (trending.category === "Pizza") {
          bgColor = "bg-sky_walker-2";
        } else if (trending.category === "Kebab") {
          bgColor = "bg-dark_blue-2";
        } else if (trending.category === "Salmon") {
          bgColor = "bg-dark_pink-2";
        } else if (trending.category === "Doughnut") {
          bgColor = "bg-light_green-2";
        }

        return (
          <figure key={trending.title} className={`${bgColor} p-5 rounded-xl space-y-7`}>
            {/* Image */}
            <div className="b-green-500 relative min-h-40 w-full rounded-xl  overflow-hidden">
              <Image src={trending.img} alt={trending.title} fill className="object-cover rounded-xl hover:scale-110 transition-all duration-300" />
            </div>

            {/* Deskripsi */}
            <figcaption className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="text-black-1 font-semibold">{trending.title}</span>
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
  );
};

export default TrendingCard;
