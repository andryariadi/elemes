import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import ButtonMotion from "./ButtonMotion";

const Navbar = () => {
  return (
    <nav className="px-[9.3rem] py-5 flex items-center justify-between bg-transparent bg-opacity-50 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="bg-sky-500">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      {/* Nav Links */}
      <div className="b-emerald-500 flex items-center gap-10">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href} className="relative b-rose-500 text-sm text-dark_gray font-semibold hover:text-green-1 transition-all duration-300 py-5">
            <span>{link.title}</span>

            {link.title === "Promotions" && <span className="absolute -top-1 -right-2 bg-dark_red text-white-1 text-xs font-light px-3 py-1 rounded-full">Hot</span>}
          </Link>
        ))}
      </div>

      {/* Auth */}
      <div className="b-violet-500 flex items-center gap-5">
        <ButtonMotion title="Masuk" link="/login" />

        <ButtonMotion title="Daftar Sekarang" link="/register" />
      </div>
    </nav>
  );
};

export default Navbar;
