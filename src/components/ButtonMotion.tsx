"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";

const ButtonMotion = ({ title, link, btn, icon }: { title: string; link?: string; btn?: boolean; icon?: boolean }) => {
  let bgBtn = "bg-btn";
  if (title === "Masuk") {
    bgBtn = "bg-transparent border-2 border-green-1";
  } else if (title === "About Us") {
    bgBtn = "bg-light_gray border-2 border-gray-200";
  }

  let textColor = "text-white-1";
  if (title === "Masuk") {
    textColor = "text-green-1";
  } else if (title === "About Us") {
    textColor = "text-black-1";
  }

  let icons;
  if (title === "Masuk") {
    icons = <IoLogIn size={20} className="text-green-1" />;
  }

  return (
    <motion.button type="button" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }} className={`${btn && `${bgBtn} w-fit text-14 md:button_bold-16 px-2 md:px-5 py-[12px] rounded-full flex items-center gap-2`}`}>
      {link && (
        <Link href={link} className={`${bgBtn} w-full text-14 md:button_bold-16 px-2 md:px-5 ${icon ? "py-[8px]" : "py-[12px]"} rounded-full flex items-center gap-2`}>
          {icon && <span className="bg-green-1/30 p-1 rounded-lg">{icons}</span>}

          <span className={`text-sm ${textColor}`}>{title}</span>
        </Link>
      )}

      {btn && <span className={`text-sm ${textColor}`}>{title}</span>}
    </motion.button>
  );
};

export default ButtonMotion;
