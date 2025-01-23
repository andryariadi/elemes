"use client";

import { categoryMenu } from "@/constant";
import Image from "next/image";
import { useRef } from "react";
import ButtonPagination from "./ButtonPagination";

const CategoryCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (direction: "next" | "prev") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "next" ? 200 : -200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="b-fuchsia-600 space-y-5">
      {/* Card Container */}
      <div ref={scrollRef} className="b-emerald-600 w-full max-w-[75.5rem] flex items-center overflow-x-auto gap-x-5 scroll-smooth no-scrollbar">
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
            // Saran Perbaikan UI
            <figure key={category.title} className={`b-sky-600 group ${bgColor} relative w-full max-w-52 flex items-center justify-center py-3 px-7 rounded-md`}>
              <div
                className="hidden group-hover:block transition-all duration-300 absolute -top-0 -left-0 -right-0 -bottom-0 bg-cover bg-center opacity-[0.1]"
                style={{
                  backgroundImage: `url('/hero.png')`,
                }}
              />

              <div className="b-violet-700 relative left-0 top-0 w-full z-10 flex items-center justify-center gap-x-5">
                <div className="b-emerald-500 size-14 flex items-center justify-center rounded-full border border-green-1/10 bg-green-1 bg-opacity-30">
                  <Image src={category.icon} alt={category.title} width={30} height={30} />
                </div>

                <figcaption className="text-black-1 flex flex-col items-start">
                  <span className="text-base text-green-1">{category.title}</span>
                  <span className="font-extralight text-xs text-nowrap">{category.items} items</span>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>

      {/* Button Pagination */}
      <div className="b-pink-500 w-full max-w-[75.5rem] flex items-center justify-end gap-5">
        <ButtonPagination title="Prev" scrollHandler={scrollHandler} />
        <ButtonPagination title="Next" scrollHandler={scrollHandler} />
      </div>
    </div>
  );
};

export default CategoryCard;
