"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Welcome
    </motion.h1>
  );
}
