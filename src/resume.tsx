import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

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
};

type ContactInformationType = {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

type ResumeType = {
  jobs: Array<JobType>;
  skills: Skills;
  contact: ContactInformationType;
};

const resume: ResumeType = {
  contact: {
    github: "http://github.com/mattfinnell",
    linkedin: "https://www.linkedin.com/in/mattfinnell/",
    email: "mailto:matt.finnell.eng@gmail.com",
    resume: "https://www.linkedin.com/in/mattfinnell/",
  },
  skills: {
    frontend: [
      { skillName: "React", comfort: 90, experience: 4 },
      { skillName: "HTML", comfort: 90, experience: 7 },
      { skillName: "CSS", comfort: 60, experience: 7 },
      { skillName: "Typescript", comfort: 80, experience: 4 },
      { skillName: "Cypress", comfort: 60, experience: 1 },
      { skillName: "Storybook", comfort: 60, experience: 1 },
      { skillName: "Responsive Design", comfort: 80, experience: 5 },
      { skillName: "React Query", comfort: 70, experience: 1 },
      { skillName: "REST Clients", comfort: 80, experience: 5 },
      { skillName: "GraphQL", comfort: 60, experience: 2 },
    ],
    backend: [
      { skillName: "Python", comfort: 90, experience: 5 },
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
      { skillName: "CI/CD", comfort: 70, experience: 5 },
      { skillName: "Docker", comfort: 70, experience: 4 },
      { skillName: "AWS", comfort: 60, experience: 1 },
      { skillName: "Observability", comfort: 60, experience: 1 },
    ],
  },
  jobs: [
    {
      thumbnail:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQGrENtM2FHN_A/company-logo_200_200/0/1661456653923?e=2147483647&v=beta&t=ISPVjJluLBuEje-VTXaZDp0R8HhuL23a6xb3uHp3IY0",
      company: "CaptivateIQ",
      position: "Senior Software Engineer",
      description: (
        <Text>
          Contributed to the development of the <i>What-If</i> feature and
          championed system Observability.
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
      thumbnail:
        "https://e7.pngegg.com/pngimages/984/326/png-clipart-meta-thumbnail-social-media-icons.png",
      company: "Meta Reality Labs",
      position: "Software Engineer II",
      description: (
        <Text>
          Backend and Frontend Development on many internal tools for Oculus
          Research from Start to Finish. Mentored multiple small teams of
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
      thumbnail:
        "https://e7.pngegg.com/pngimages/984/326/png-clipart-meta-thumbnail-social-media-icons.png",
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
      thumbnail:
        "https://www.logolynx.com/images/logolynx/f1/f12ac0b2a1db96e6ee7b72e6b75b4027.jpeg",
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
      thumbnail:
        "https://www.tagnw.org/wp-content/uploads/2021/09/TAGNW-logo-horiz-primary.png",
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
      thumbnail:
        "https://payload.cargocollective.com/1/1/54817/7995435/SPIE_black.png",
      company: "SPIE",
      position: "Frontend Developer",
      description: <Text>Redesigned the landing website.</Text>,
      skills: ["C#", "Razor", ".NET", "IIS", "HTML", "CSS", "Javascript"],
    },
    {
      thumbnail:
        "https://ww1.prweb.com/prfiles/2014/10/14/12249916/RR%20Square%20Large.png",
      company: "Prepared Response",
      position: "Frontend Developer",
      description: (
        <Text>Re-Designed and Re-Implemented the entire website.</Text>
      ),
      skills: ["HTML", "CSS", "Javascript", "git"],
    },
  ],
};

export default resume;
