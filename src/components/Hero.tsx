import Image from "next/image";
import ButtonMotion from "./ButtonMotion";
import { IoMdStar } from "react-icons/io";

const Hero = () => {
  return (
    <div className="b-amber-500 relative px-5 md:px-7 xl:px-10 2xl:px-[9.3rem] min-h-[calc(100vh-6.5rem)]">
      {/* Background Image */}
      <div
        className="absolute -top-14 -left-0 -right-0 -bottom-0 bg-cover bg-center opacity-[0.03]"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      />

      {/* Content */}
      <div className="b-amber-500 relative top-0 left-0 min-h-[calc(100vh-6.5rem)] z-10 flex items-center justify-center">
        {/* Content */}
        <div className="b-emerald-500 w-full pt-5 md:pt-0 space-y-20 md:space-y-7">
          {/* Tile */}
          <div className="text-5xl lg:text-6xl text-green-1 font-bold space-y-1">
            <h1>Good Food Us</h1>
            <h1>Good Mood</h1>
          </div>

          {/* Hero Image Only in Mobile */}
          <div className="b-sky-500 w-full md:hidden flex items-center justify-start">
            <div className="relative bg-teen_gray bg-opacity-20 w-[16rem] h-[16rem] flex items-center justify-center rounded-full border hover:border-green-1 transition-all duration-300">
              {/* Image */}
              <div className="b-rose-600 relative w-[13rem] h-[13rem] hover:rotate-12 hover:scale-105 transition-all duration-300">
                <Image src="/home2.png" alt="Hero" fill className="object-cover" />
              </div>

              {/* Card */}
              <figure className="bg-white-1 shadow-md bg-opacity-5 backdrop-blur-lg border border-white-1/10 hover:border-green-1 transition-all duration-300 absolute -bottom-5 -right-32 flex items-center gap-3 py-5 px-7 rounded-lg">
                <Image src="/home2.png" alt="Hero" width={50} height={50} />

                <figcaption className="flex flex-col justify-center gap-1">
                  <span className="text-black-1">Green Salad Tomato</span>
                  <span className="text-green-1 text-xs">Tomato</span>
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, index, array) => {
                      const isLast = index === array.length - 1;
                      return <IoMdStar key={index} size={12} className={isLast ? "text-gray-500" : "text-yellow-500"} />;
                    })}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="space-y-5 md:space-y-7">
            {/* Description */}
            <p className="b-amber-500 text-dark_gray text-balance w-full max-w-md">
              I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
            </p>

            {/* Button */}
            <div className="flex items-center gap-5">
              <ButtonMotion title="Daftar Sekarang" link="/register" />
              <ButtonMotion title="About Us" link="/about" />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="b-sky-500 w-full hidden md:flex items-center justify-center">
          <div className="relative bg-teen_gray bg-opacity-20 w-[18rem] h-[18rem] lg:w-[27rem] lg:h-[27rem] flex items-center justify-center rounded-full border hover:border-green-1 transition-all duration-300">
            {/* Image */}
            <div className="b-rose-600 relative w-[14rem] h-[14rem] lg:w-[22rem] lg:h-[22rem] hover:rotate-12 hover:scale-105 transition-all duration-300">
              <Image src="/home2.png" alt="Hero" fill className="object-cover" />
            </div>

            {/* Card */}
            <figure className="bg-white-1 shadow-md bg-opacity-5 backdrop-blur-lg border border-white-1/10 hover:border-green-1 transition-all duration-300 absolute -bottom-10 -left-20 lg:bottom-0 lg:-left-20 flex items-center gap-3 py-5 px-7 rounded-lg">
              <Image src="/home2.png" alt="Hero" width={50} height={50} />

              <figcaption className="flex flex-col justify-center gap-1">
                <span className="text-black-1">Green Salad Tomato</span>
                <span className="text-green-1 text-xs">Tomato</span>
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, index, array) => {
                    const isLast = index === array.length - 1;
                    return <IoMdStar key={index} size={12} className={isLast ? "text-gray-500" : "text-yellow-500"} />;
                  })}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
