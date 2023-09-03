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

type ResumeType = {
  jobs: Array<JobType>;
  skills: Skills;
};

const resume: ResumeType = {
  skills: {
    frontend: [
      { skillName: "React", comfort: 90, experience: 4 },
      { skillName: "HTML", comfort: 90, experience: 7 },
      { skillName: "CSS", comfort: 60, experience: 7 },
      { skillName: "Typescript", comfort: 80, experience: 4 },
      { skillName: "Cypress", comfort: 60, experience: 1 },
      { skillName: "Storybook", comfort: 60, experience: 1 },
      { skillName: "Design Systems", comfort: 90, experience: 5 },
      { skillName: "Responsive Design", comfort: 80, experience: 5 },
      { skillName: "React Query", comfort: 70, experience: 1 },
      { skillName: "REST Frameworks", comfort: 80, experience: 1 },
      { skillName: "GraphQL", comfort: 60, experience: 2 },
    ],
    backend: [
      { skillName: "Python", comfort: 90, experience: 5 },
      { skillName: "Unix", comfort: 80, experience: 7 },
      { skillName: "Django", comfort: 60, experience: 7 },
      { skillName: "DjangoRestFramework", comfort: 80, experience: 4 },
      { skillName: "Firebase", comfort: 60, experience: 1 },
      { skillName: "RPC", comfort: 60, experience: 1 },
      { skillName: "SQL", comfort: 90, experience: 5 },
      { skillName: "NoSQL", comfort: 80, experience: 5 },
      { skillName: "PostgreSQL", comfort: 70, experience: 1 },
      { skillName: "C#", comfort: 80, experience: 1 },
      { skillName: "Dotnet Core", comfort: 60, experience: 2 },
      { skillName: "Hacklang", comfort: 60, experience: 2 },
    ],
    devops: [
      { skillName: "Git", comfort: 90, experience: 5 },
      { skillName: "Github", comfort: 80, experience: 7 },
      { skillName: "CI/CD", comfort: 60, experience: 7 },
      { skillName: "Docker", comfort: 80, experience: 4 },
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
        "Django Rest Framework",
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
          Developed many internal tools for Oculus Research from End to End.
          Mentored multiple small teams of software engineers across these
          projects.
        </Text>
      ),
      skills: [
        "React",
        "Python",
        "Javascript",
        "HackLang",
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
      skills: ["React", "Javascript", "HackLang", "MySQL"],
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
      skills: ["C#", "Angular", "WPF", "CI/CD", "Azure"],
    },
    {
      thumbnail:
        "https://www.tagnw.org/wp-content/uploads/2021/09/TAGNW-logo-horiz-primary.png",
      company: "Technology Alliance Group (NW)",
      position: "Backend Developer",
      description: (
        <Text>
          Synchronized Event, CRM, and Payment Data via associated 3rd party
          API's.
        </Text>
      ),
      skills: ["Python", "Flask", "RESTful Webservices", "Wordpress"],
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
      description: <Text>Redesigned the landing website.</Text>,
      skills: ["HTML", "CSS", "Javascript", "git"],
    },
  ],
};

export default resume;