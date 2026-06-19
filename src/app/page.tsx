import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreNumbersSection from "@/components/CoreNumbersSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import PatentsSection from "@/components/PatentsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CoreNumbersSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <PatentsSection />
      </main>
      <Footer />
    </>
  );
}
