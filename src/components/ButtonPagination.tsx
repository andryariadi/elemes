"use client";

import { motion } from "framer-motion";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ButtonPagination = ({ title, scrollHandler }: { title: string; scrollHandler: (direction: "next" | "prev") => void }) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollHandler(title === "Prev" ? "prev" : "next")}
      className={`bg-btn w-fit text-14 md:button_bold-16 px-2 py-[6px] rounded-full flex items-center justify-center gap-2 text-white-1`}
    >
      {title === "Prev" ? <IoIosArrowDropleftCircle size={26} /> : <IoIosArrowDroprightCircle size={26} />}
      <span className="text-md">{title}</span>
    </motion.button>
  );
};

export default ButtonPagination;
