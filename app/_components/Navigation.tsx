import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/nav/logo.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navigation = () => {
   const navLinks = ["Portfolio", "Process", "Interests", "Contact"];

   return (
      <nav className="sticky top-0 left-0 w-full h-24 bg-white shadow-lg flex items-center z-10">
         <div className="container px-10 flex items-center justify-between mx-auto">
            <Image
               src={Logo}
               width={200}
               height={100}
               alt="John Forgione Logo"
            ></Image>

            <ul className="flex justify-center items-center uppercase my-0">
               {navLinks.map((link) => (
                  <li className="mx-2 hidden md:block" key={link}>
                     <a data-ccursor className="block p-2 rounded-lg" href="#">
                        {link}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default Navigation;
