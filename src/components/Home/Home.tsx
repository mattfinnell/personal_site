import { FC } from "react";
import ContactSection from "../Contact/ContactSection";
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
      <ContactSection />
    </>
  );
};

export default Home;
