"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import FancyImage from "./FancyImage";

interface Props {
   images: string[];
   className?: string;
}

export const ParallaxScroll = ({ images, className }: Props) => {
   const gridRef = useRef<any>(null);

   const { scrollYProgress } = useScroll({});

   const translateFirst = useTransform(scrollYProgress, [0, 1], [300, 0]);
   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 0]);
   const translateThird = useTransform(scrollYProgress, [0, 1], [300, 0]);

   const third = Math.ceil(images.length / 3);

   const firstPart = images.slice(0, third);
   const secondPart = images.slice(third, 2 * third);
   const thirdPart = images.slice(2 * third);

   return (
      <div
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10"
         ref={gridRef}
      >
         <div className="grid gap-10">
            {firstPart.map((el, idx) => (
               <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={"grid-1" + idx}
               >
                  <FancyImage
                     className="block"
                     src={el}
                     width={1800}
                     height={600}
                     alt="A painting of a house on a field."
                  />
               </motion.div>
            ))}
         </div>
         <div className="grid gap-10">
            {secondPart.map((el, idx) => (
               <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                  <FancyImage
                     className="block"
                     src={el}
                     width={1800}
                     height={600}
                     alt="A painting of a house on a field."
                  />
               </motion.div>
            ))}
         </div>
         <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
               <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <FancyImage
                     className="block"
                     src={el}
                     width={1800}
                     height={600}
                     alt="A painting of a house on a field."
                  />
               </motion.div>
            ))}
         </div>
      </div>
   );
};
