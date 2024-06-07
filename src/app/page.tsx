
import AboutMe from "@/components/ui/About";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/pages/Header/Navbar";
import Greeting from "@/pages/Hero/Hero";
import Skills from "@/pages/skills/Skills";
export default function Index() {
  return (
    <main>
      <Navbar/>
      <Greeting />
      <Skills />
      {/* <Sidebar/> */}
      <AboutMe/>
      {/* <Projects/> */}
    </main>
  );
}