import React from "react";
import { ParallaxScroll } from "./ParallaxScroll";

const GallerySection = () => {
   const images = [
      "https://www.johnforgione.com/site/assets/files/1108/uss_texas_ny_harbor_john_forgione_copy.jpg",
      "https://www.johnforgione.com/site/assets/files/1010/old_dooley_s_farm.jpg",
      "https://www.johnforgione.com/site/assets/files/1045/sabia_farm_easton_ct.jpg",
      "https://www.johnforgione.com/site/assets/files/1044/matunuck_-ri-_-the-ocean-mist-web.jpg",
      "https://www.johnforgione.com/site/assets/files/1045/sabia-farm_-easton-ct-web.jpg",
      "https://johnforgione.sfadev.com/site/assets/files/1046/forgione_john_47581868_2048359818546872_9007033292696728762_n.jpg",
      "https://www.johnforgione.com/site/assets/files/1047/waning-summer-_-gilbertie_s-farm-web.jpg",
      "https://www.johnforgione.com/site/assets/files/1060/troutbrook_valley_orchard_800x400.jpg",
      "https://www.johnforgione.com/site/assets/files/1028/pushing_off_lr.jpg",
      "https://www.johnforgione.com/site/assets/files/1107/nellie_at_rest.jpg",
      "https://johnforgione.sfadev.com/site/assets/files/1047/forgione_john_21148947_122116641771613_4254935142784565248_n.jpg"
   ];

   return (
      <div className="my-32">
          <ParallaxScroll images={images}></ParallaxScroll>
      </div>
   );
};

export default GallerySection;
