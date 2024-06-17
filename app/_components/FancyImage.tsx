"use client";

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Tilt from "react-parallax-tilt";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Props {
   src: string;
   width: number;
   height: number;
   alt: string;
   className: string;
}

const FancyImage = ({ src, className, width, height, alt = "" }: Props) => {

   useEffect(() => {
      Fancybox.bind("[data-fancybox]", {});
   }, []);
   
   return (
      <>
         <Tilt scale={1.05} transitionSpeed={1200} perspective={2000} tiltMaxAngleY={10} tiltMaxAngleX={10}>
            <a className={className} href={src} data-fancybox>
               <Image
                  className="rounded-lg shadow-sm my-auto opacity-90 hover:opacity-100 transition-opacity duration-150"
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
               ></Image>
            </a>
         </Tilt>
      </>
   );
};

export default FancyImage;
