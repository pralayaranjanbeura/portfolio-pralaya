import About from "@/components/About";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FlaotingNav";

import { navItems } from "@/data";



export default function Home() {
  
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col  mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl  w-full">
        <FloatingNav  navItems={navItems} />
        <Hero />
        <Profile/>
        <About/>
        <Grid />
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
