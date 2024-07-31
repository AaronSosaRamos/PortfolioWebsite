"use client"

import Banner from "@/components/Banner";
import CourseSlider from "@/components/CourseSlider";
import Navbar from "@/components/Navbar";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Projects from "@/components/Projects";
import Repositories from "@/components/Repositories";

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
      <div id="repositories">
        <Repositories />
      </div>
      <div id="courses">
        <CourseSlider />
      </div>
    </>
  );
}
