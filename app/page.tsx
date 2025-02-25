import Navigation from "@/app/_components/Navigation";
import ContextCursor from "@/app/_components/contextCursor/ContextCursor";
import Landing from "./_components/Landing";
import GallerySection from "./_components/GallerySection";
import CalloutButton from "./_components/CalloutButton";
import Image from "next/image";
import FancyImage from "./_components/FancyImage";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#f3f2ff]">
         <Navigation />

         <div className="max-w-screen-2xl px-10">
            <Landing />

            <GallerySection />

            <div className="my-20 flex gap-10 items-center">
               <div className="">
                  <FancyImage src='https://johnforgione.sfadev.com/site/templates/_assets/img/callouts/boat.png' alt={""} width={2000} height={600} className={""}></FancyImage>
               </div>
               <div className="max-w-screen-sm">
                  <h2 className="uppercase underline underline-offset-4 text-stone-500 text-xl my-3 opacity-75">
                     Portfolio
                  </h2>
                  <p className="text-xl">
                     My desire to paint is driven by a true love of nature and
                     art. Formally schooled in the fine arts, and deeply
                     influenced by the French and American Impressionists, I
                     take great satisfaction in recording time, light and form,
                     en plein air. I hope to positively inspire those around me,
                     and paint on.
                  </p>
                  <CalloutButton title="More Paintings" href="#" />
               </div>
            </div>
            <div className="my-20 flex gap-10 items-center">
               
               <div className="max-w-screen-sm -mr-60">
                  <h2 className="uppercase underline underline-offset-4 text-stone-500 text-xl my-3 opacity-75">
                     Portfolio
                  </h2>
                  <p className="text-xl">
                     My desire to paint is driven by a true love of nature and
                     art. Formally schooled in the fine arts, and deeply
                     influenced by the French and American Impressionists, I
                     take great satisfaction in recording time, light and form,
                     en plein air. I hope to positively inspire those around me,
                     and paint on.
                  </p>
                  <CalloutButton title="More Paintings" href="#" />
               </div>
               <div className="">
                  <Image src='https://johnforgione.sfadev.com/site/templates/_assets/img/callouts/stroke.png' alt={""} width={2000} height={600} className={""}></Image>
               </div>
            </div>
            <div className="my-20 flex gap-10 items-center">
               <div className="">
                  <FancyImage src='https://www.johnforgione.com/site/assets/files/1107/nellie_at_rest.jpg' alt={""} width={2000} height={600} className={""}></FancyImage>
               </div>
               <div className="max-w-screen-sm">
                  <h2 className="uppercase underline underline-offset-4 text-stone-500 text-xl my-3 opacity-75">
                     Portfolio
                  </h2>
                  <p className="text-xl">
                     My desire to paint is driven by a true love of nature and
                     art. Formally schooled in the fine arts, and deeply
                     influenced by the French and American Impressionists, I
                     take great satisfaction in recording time, light and form,
                     en plein air. I hope to positively inspire those around me,
                     and paint on.
                  </p>
                  <CalloutButton title="More Paintings" href="#" />
               </div>
            </div>
         </div>

         <ContextCursor />
      </main>
   );
}
