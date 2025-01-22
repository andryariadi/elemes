"use client";

import { motion } from "framer-motion";
import InputField from "./InputField";

const FooterForm = () => {
  return (
    <form className="flex items-center">
      <InputField type="email" placeholder="Enter your email" />

      <motion.button type="button" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }} className={`bg-btn w-fit text-14 md:button_bold-16 px-2 md:px-5 py-[15px] rounded-e-xl flex items-center gap-2`}>
        Send
      </motion.button>
    </form>
  );
};

export default FooterForm;
