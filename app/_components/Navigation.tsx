import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@/app/assets/nav/logo.png";

const Navigation = () => {
   const navLinks = ["Portfolio", "Process", "Interests", "Contact"];

   return (
      <nav className="sticky top-0 left-0 w-full h-24 mb-4 bg-white shadow-lg flex items-center z-10" style={{transform: `translateZ(100px)`} }>
         <div className="container px-10 flex items-center justify-between mx-auto">
            <Image
               src={Logo}
               width={200}
               height={100}
               alt="John Forgione Logo"
            />

            <ul className="flex justify-center items-center uppercase my-0">
               {navLinks.map((link) => (
                  <li className="mx-2 hidden md:block" key={link}>
                     <a
                        data-ccursor
                        className="block p-2 rounded-lg font-normal"
                        href="#"
                     >
                        {link}
                     </a>
                  </li>
               ))}
            </ul>

            <a href="#" data-ccursor="lift" className="btn btn-transparent rounded-lg block md:hidden">
               <RxHamburgerMenu size={50} />
            </a>
         </div>
      </nav>
   );
};

export default Navigation;
