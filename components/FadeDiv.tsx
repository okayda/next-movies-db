"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function FadeDiv({
  index,
  duration,
  className,
  children,
}: {
  index: number;
  duration: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.15,
        ease: "easeInOut",
        duration: duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
