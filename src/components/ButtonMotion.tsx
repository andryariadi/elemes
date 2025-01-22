"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ButtonMotion = ({ title, link, icon }: { title: string; link: string; icon?: boolean }) => {
  return (
    <motion.button type="button" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }} className="">
      <Link href={link} className={`${title === "Masuk" ? "bg-transparent border-2 border-green-1" : "bg-btn"} w-full text-14 md:button_bold-16 px-2 md:px-5 py-[10px] rounded-full flex items-center gap-2`}>
        {icon && <span>{icon}</span>}

        <span className={`text-sm ${title === "Create Video" || (title === "Dashboard" && "hidden md:block")} ${title === "Masuk" ? "text-green-1" : "text-white-1"}`}>{title}</span>
      </Link>
    </motion.button>
  );
};

export default ButtonMotion;
