"use client"

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Banner />
      </div>
      <div id="experience">
        <ProfessionalExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}
