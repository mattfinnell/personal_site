import { FC } from "react";
import ContactSection from "../Contact/ContactSection";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";
import About from "./About";
import { ProfileHeader } from "./Header";

type HomeProps = {};
const Home: FC<HomeProps> = () => {
  return (
    <>
      <ProfileHeader />
      <About />
      <WorkExperience />
      <Skills />
      <Education />
      <ContactSection />
    </>
  );
};

export default Home;
