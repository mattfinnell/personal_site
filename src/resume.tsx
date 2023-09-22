import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

import CaptivateIQ from "../src/assets/CIQ.webp";
import Meta from "../src/assets/Meta.webp";
import Milliman from "../src/assets/Milliman.webp";
import PreparedResponse from "../src/assets/PreparedResponse.webp";
import SPIE from "../src/assets/SPIE.webp";
import TAGNW from "../src/assets/TAGNW.webp";
import WesternWashingtonUniversity from "../src/assets/WWU.webp";

type JobType = {
  thumbnail: string;
  company: string;
  position: string;
  description: ReactNode;
  skills: Array<string>;
};

export type Skill = {
  skillName: string;
  comfort: number;
  experience: number;
};

type Skills = {
  frontend: Array<Skill>;
  backend: Array<Skill>;
  devops: Array<Skill>;
  supplemental: Array<Skill>;
};

type ContactInformationType = {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

type EducationType = {
  thumbnail: string;
  school_name: string;
  arrival: string;
  departure: string;
  focus: string;
  courses: Array<string>;
};

type ResumeType = {
  jobs: Array<JobType>;
  skills: Skills;
  contact: ContactInformationType;
  education: EducationType;
};

const resume: ResumeType = {
  education: {
    thumbnail: WesternWashingtonUniversity,
    school_name: "Western Washington University",
    arrival: "Fall 2011",
    departure: "Spring 2016",
    focus: "Computer Science",
    courses: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Mining",
      "Datastructures + Algorithms II",
      "Database Systems",
      "Unix Development",
      "Object Oriented Design",
      "Statistical Methods",
    ],
  },
  contact: {
    github: "http://github.com/mattfinnell",
    linkedin: "https://www.linkedin.com/in/mattfinnell/",
    email: "mailto:matt.finnell.eng@gmail.com",
    resume: "https://www.linkedin.com/in/mattfinnell/",
  },
  skills: {
    frontend: [
      { skillName: "React", comfort: 90, experience: 5 },
      { skillName: "HTML", comfort: 90, experience: 7 },
      { skillName: "CSS", comfort: 60, experience: 7 },
      { skillName: "Typescript", comfort: 80, experience: 4 },
      { skillName: "Javascript", comfort: 75, experience: 6 },
      { skillName: "Cypress", comfort: 60, experience: 1 },
      { skillName: "Storybook", comfort: 70, experience: 1 },
      { skillName: "Responsiveness", comfort: 80, experience: 5 },
      { skillName: "React Query", comfort: 70, experience: 1 },
      { skillName: "REST Clients", comfort: 80, experience: 5 },
      { skillName: "GraphQL", comfort: 60, experience: 2 },
    ],
    backend: [
      { skillName: "Python", comfort: 90, experience: 6 },
      { skillName: "Django", comfort: 60, experience: 4 },
      { skillName: "REST APIs", comfort: 70, experience: 5 },
      { skillName: "Firebase", comfort: 60, experience: 1 },
      { skillName: "Redis", comfort: 60, experience: 1 },
      { skillName: "NoSQL", comfort: 70, experience: 4 },
      { skillName: "PostgreSQL", comfort: 70, experience: 4 },
      { skillName: "C#", comfort: 70, experience: 2 },
      { skillName: "Dotnet Core", comfort: 70, experience: 2 },
    ],
    devops: [
      { skillName: "Linux", comfort: 80, experience: 7 },
      { skillName: "Git", comfort: 90, experience: 7 },
      { skillName: "Github", comfort: 90, experience: 7 },
      { skillName: "CI/CD", comfort: 80, experience: 5 },
      { skillName: "Docker", comfort: 70, experience: 4 },
      { skillName: "AWS", comfort: 60, experience: 3 },
      { skillName: "Observability", comfort: 75, experience: 3 },
    ],
    supplemental: [
      { skillName: "Agile Methodologies", comfort: 90, experience: 5 },
      { skillName: "Presentational Skills", comfort: 90, experience: 10 },
      { skillName: "Mentorship", comfort: 75, experience: 2 },
      { skillName: "PyTorch", comfort: 50, experience: 1 },
      { skillName: "SciKit-Learn", comfort: 60, experience: 2 },
    ],
  },
  jobs: [
    {
      thumbnail: CaptivateIQ,
      company: "CaptivateIQ",
      position: "Senior Software Engineer",
      description: (
        <Text>
          Contributed to the frontend and backend development of the{" "}
          <i>What-If</i> product feature and guided better system observability
          for company wide adoption.
        </Text>
      ),
      skills: [
        "React",
        "Typescript",
        "Python",
        "Django",
        "PostgreSQL",
        "Datadog",
      ],
    },
    {
      thumbnail: Meta,
      company: "Meta Reality Labs",
      position: "Software Engineer II",
      description: (
        <Text>
          Backend and Frontend Development on many internal tools for Oculus
          Research from start to finish. Mentored multiple small teams of
          software engineers across these projects.
        </Text>
      ),
      skills: [
        "React",
        "Python",
        "Javascript",
        "PHP",
        "GraphQL",
        "CI/CD",
        "Containerization",
        "MySQL",
        "NoSQL",
      ],
    },
    {
      thumbnail: Meta,
      company: "Meta Reality Labs",
      position: "Software Engineer",
      description: (
        <Text>
          Developed Features for the Facebook Assistant Console. A tool that
          inspected each layer of an SLP / NLP request.
        </Text>
      ),
      skills: ["React", "Javascript", "PHP", "MySQL", "GraphQL"],
    },
    {
      thumbnail: Milliman,
      company: "Milliman",
      position: "Software Engineer",
      description: (
        <Text>
          Contributed to the MgAlpha product. Built the Economic Scenario
          Forecasting feature from start to finish.
        </Text>
      ),
      skills: ["C#", "Angular", "WPF", "CI/CD", "Azure", "Git", "RESTful APIs"],
    },
    {
      thumbnail: TAGNW,
      company: "Technology Alliance Group (NW)",
      position: "Backend Developer",
      description: (
        <Text>
          Synchronized 3rd Party Event, CRM, and Payment Data via a backend
          webservice.
        </Text>
      ),
      skills: ["Python", "Flask", "RESTful APIs", "Wordpress", "Git"],
    },
    {
      thumbnail: SPIE,
      company: "SPIE",
      position: "Frontend Developer",
      description: (
        <Text>
          Redesigned the landing website along with implementing new portals
          features for different users.
        </Text>
      ),
      skills: ["C#", "Razor", ".NET", "IIS", "HTML", "CSS", "Javascript"],
    },
    {
      thumbnail: PreparedResponse,
      company: "Prepared Response",
      position: "Frontend Developer",
      description: <Text>Developed an entirely new company website.</Text>,
      skills: ["HTML", "CSS", "Javascript", "git"],
    },
  ],
};

export default resume;
