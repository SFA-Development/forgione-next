import React from "react";
import Image from "next/image";
import landingPainting from "@/app/assets/landing-painting.jpg";
import signature from "@/app/assets/nav/john-signature.png";
import FancyImage from "./FancyImage";

const Landing = () => {
   return (
      <div className="landing flex flex-col lg:flex-row justify-center items-center">
         <FancyImage
            className="block"
            src={landingPainting.src}
            width={1800}
            height={600}
            alt="A painting of a house on a field."
         />

         <div className="flex flex-col ml-0 lg:ml-14">
            <h1 className="text-5xl my-10 font-light">
               My desire to paint is driven by a true love of nature and art.
            </h1>
            <Image
               src={signature}
               width={250}
               alt="John Forgione Signature"
            ></Image>
         </div>
      </div>
   );
};

export default Landing;
