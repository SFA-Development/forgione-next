import React from "react";
import Image from "next/image";
import landingPainting from "@/app/assets/landing-painting.jpg";
import signature from "@/app/assets/nav/john-signature.png";
import FancyImage from "./FancyImage";

const Landing = () => {
   return (
      <div className="landing pt-20 flex flex-col lg:flex-row justify-center items-center">
         <FancyImage
            className="block"
            src={landingPainting.src}
            width={1800}
            height={600}
            alt="A painting of a house on a field."
         />

         <div className="flex flex-col items-end ml-0 lg:items-start lg:ml-14">
            <h1 className=" font-light text-2xl my-5 md:text-4xl lg:text-5xl lg:my-10">
               My desire to paint is driven by a true love of nature and art.
            </h1>
            <Image
               className="inline-block lg:hidden"
               src={signature}
               width={150}
               alt="John Forgione Signature"
            />
            <Image
               className="hidden lg:block"
               src={signature}
               width={250}
               alt="John Forgione Signature"
            />
         </div>
      </div>
   );
};

export default Landing;
