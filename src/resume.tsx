import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type JobType = {
  thumbnail: string;
  company: string;
  position: string;
  description: ReactNode;
  skills: Array<string>;
};

type ResumeType = {
  jobs: Array<JobType>;
};

const resume: ResumeType = {
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
          Contributed for the MgAlpha product. Built the Economic Scenario
          Forecasting feature from start to finish.
        </Text>
      ),
      skills: ["C#", "Angular", "WPF", "CI/CD", "Azure"],
    },
  ],
};

export default resume;
