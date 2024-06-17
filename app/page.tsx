import Navigation from "@/app/_components/Navigation";
import ContextCursor from "@/app/_components/contextCursor/ContextCursor";
import Landing from "./_components/Landing";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between">
         <Navigation />

         <div className="container px-10">
            <Landing />
         </div>

         <ContextCursor />
      </main>
   );
}
