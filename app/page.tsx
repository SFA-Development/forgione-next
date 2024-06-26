import Navigation from "@/app/_components/Navigation";
import ContextCursor from "@/app/_components/contextCursor/ContextCursor";
import Landing from "./_components/Landing";
import GallerySection from "./_components/GallerySection";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between">
         <Navigation />

         <div className="max-w-screen-2xl px-10">
            <Landing />
         <GallerySection/>
         </div>


         <ContextCursor />
      </main>
   );
}
