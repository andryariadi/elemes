import Link from "next/link";
import { GoHome } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiDotsSixBold } from "react-icons/pi";
const MobileNav = () => {
  return (
    <nav className="md:hidden bg-white-1 bg-opacity-30 backdrop-blur-lg w-full max-w-sm mx-auto px-5 py-3 rounded-xl sticky bottom-0 z-50 shadow-md flex items-center justify-between text-dark_gray text-sm border border-white-1 border-opacity-5 hover:border-green-1 transition-all duration-300">
      <Link
        href="/"
        className="flex flex-col items-center hover:text-green-1 hover:scale-105
      transition-all duration-300"
      >
        <GoHome size={24} />
        <span>Home</span>
      </Link>
      <Link
        href="/promotions"
        className="flex flex-col items-center hover:text-green-1 hover:scale-105
      transition-all duration-300"
      >
        <HiOutlineSpeakerphone size={24} />
        <span>Promotions</span>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center hover:text-green-1 hover:scale-105
      transition-all duration-300"
      >
        <PiDotsSixBold size={26} />
        <span>Other</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
