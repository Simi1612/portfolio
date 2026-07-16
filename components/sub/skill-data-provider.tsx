"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="scale-[0.82] md:scale-100 origin-center -m-1.5 md:m-0"
    >
      <Image
        src={src.startsWith("http") ? src : `/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        unoptimized={src.startsWith("http")}
        style={{ width: "auto", height: "auto", maxWidth: width, maxHeight: height }}
      />
    </motion.div>
  );
};
