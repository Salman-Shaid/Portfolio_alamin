import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
// import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Skills from "@/components/skill";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero/>
      <Skills></Skills>
      <About></About>
      {/* <Main/> */}
      <Experience></Experience>
    
      <Contact></Contact>
      <Footer/>
      
    </div>
  );
}
