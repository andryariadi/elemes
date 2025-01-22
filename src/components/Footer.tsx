import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { categoryMenu } from "@/constant";
import FooterForm from "./FormFooter";

const Footer = () => {
  return (
    <footer className="b-fuchsia-600 mt-24 px-[9.3rem]">
      <div className="bg-green-2 min-w-full rounded-lg flex items-center p-14">
        {/* Logo & Address */}
        <div className="b-rose-500 w-full max-w-md space-y-5">
          {/* Logo */}
          <Link href="/" className="b-sky-500">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>

          <p className="text-dark_gray text-sm text-balance">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Link href="/" className="p-3 rounded-full text-green-1 hover:bg-green-1 hover:text-white-1 transition-all duration-300">
              <IoMailOutline size={22} />
            </Link>
            <Link href="/" className="p-3 rounded-full text-green-1 hover:bg-green-1 hover:text-white-1 transition-all duration-300">
              <MdOutlineLocalPhone size={22} />
            </Link>
            <Link href="/" className="p-3 rounded-full text-green-1 hover:bg-green-1 hover:text-white-1 transition-all duration-300">
              <IoLogoInstagram size={22} />
            </Link>
          </div>
        </div>

        {/* Nav Links */}
        <div className="-amber-500 w-full flex items-start justify-between">
          {/* Category */}
          <div className="-green-500 space-y-5">
            <h3 className="text-black-1">Categories</h3>

            {/* NavLinks */}
            <div className="flex flex-col items-start gap-3">
              {categoryMenu.map((category) => (
                <Link key={category.title} href="/" className="text-sm font-light text-dark_gray hover:text-green-1 transition-all duration-300">
                  {category.title}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div className="-rose-500 space-y-5">
            <h3 className="text-black-1">About Us</h3>

            {/* NavLinks */}
            <div className="flex flex-col items-start gap-3">
              <Link href="/about" className="text-sm font-light text-dark_gray hover:text-green-1 transition-all duration-300">
                About Us
              </Link>
              <Link href="/" className="text-sm font-light text-dark_gray hover:text-green-1 transition-all duration-300">
                FAQ
              </Link>
              <Link href="/" className="text-sm font-light text-dark_gray hover:text-green-1 transition-all duration-300">
                Report Problem
              </Link>
            </div>
          </div>

          {/* News Latter */}
          <div className="b-violet-500 space-y-5">
            <h3 className="text-black-1">New Letter</h3>

            {/* Content */}
            <div className="flex flex-col items-start gap-5 w-full max-w-60">
              <p className="text-dark_gray text-sm flex-wrap">Get now free 50% discount for alll products on your first order</p>

              {/* Form */}
              <FooterForm />

              {/* Icons */}
              <div className="flex flex-col items-start gap-3">
                <Link href="/" className="text-green-1 flex items-center gap-1">
                  <IoMailOutline size={22} />
                  <span className="text-black-1 text-xs">elemesid@gmail.com</span>
                </Link>
                <Link href="/" className="text-green-1 flex items-center gap-1">
                  <MdOutlineLocalPhone size={22} />
                  <span className="text-black-1 text-xs">0888 1111 2222</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <p className="text-xs text-dark_gray">© 2021 Elemes id. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
