import Sidebar from "@/components/sidebar/sidebar";
import AboutMe from "@/components/ui/About";
import MainContent from "@/components/ui/MainContain";
import { Education } from "@/pages/Education/Education";
import Navbar from "@/pages/Header/Navbar";
import Greeting from "@/pages/Hero/Hero";
import Resume from "@/pages/resume/resume";
import Skills from "@/pages/skills/Skills";

export default function Index() {
  return (
    <main className="flex justify-center">
     <MainContent/>
    </main>
  );
}
