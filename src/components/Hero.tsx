import Image from "next/image";
import ButtonMotion from "./ButtonMotion";
import { IoMdStar } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative px-[9.3rem] min-h-[calc(100vh-6.5rem)] b-amber-500">
      {/* Background Image */}
      <div
        className="absolute -top-14 -left-0 -right-0 -bottom-0 bg-cover bg-center opacity-[0.03]"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      />

      {/* Content */}
      <div className="relative top-0 left-0 min-h-[calc(100vh-6.5rem)] z-10 b-amber-500 flex items-center justify-center">
        {/* Content */}
        <div className="b-emerald-500 w-full space-y-7">
          {/* Tile */}
          <div className="text-6xl text-green-1 font-bold space-y-1">
            <h1>Good Food Us</h1>
            <h1>Good Mood</h1>
          </div>

          {/* Description */}
          <p className="text-dark_gray">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>

          {/* Button */}
          <div className="flex items-center gap-5">
            <ButtonMotion title="Daftar Sekarang" link="/register" />
            <ButtonMotion title="About Us" link="/about" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="b-sky-500 w-full flex items-center justify-center">
          <div className="relative bg-teen_gray bg-opacity-20 w-[27rem] h-[27rem] flex items-center justify-center rounded-full border hover:border-green-1 transition-all duration-300">
            {/* Image */}
            <div className="b-rose-600 relative w-[22rem] h-[22rem] hover:rotate-12 hover:scale-105 transition-all duration-300">
              <Image src="/home2.png" alt="Hero" fill className="object-cover" />
            </div>

            {/* Card */}
            <figure className="bg-white-1 shadow-md bg-opacity-30 backdrop-blur-lg border border-white-1/10 hover:border-green-1 transition-all duration-300 absolute bottom-0 -left-20 flex items-center gap-3 py-5 px-7 rounded-lg">
              <Image src="/home2.png" alt="Hero" width={50} height={50} />

              <figcaption className="flex flex-col justify-center gap-1">
                <span className="text-black-1">Green Salad Tomato</span>
                <span className="text-dark_gray text-xs">Tomato</span>
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
