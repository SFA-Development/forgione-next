"use client"

import React, { useEffect } from "react";
import contextCursor from ".";
import { useGSAP } from "@gsap/react";

const ContextCursor = () => {
   useGSAP(() => {
      contextCursor();

      return () => {
         document.querySelectorAll(".c-cursor").forEach((el) => {
            el.remove();
         });
      };
   }, []);
   return <div></div>;
};

export default ContextCursor;
