import { Card, CardBody, CardHeader, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Skill } from "../../resume";
import SkillBar from "./SkillBar";

type SkillsCardProps = { title: string; skills: Array<Skill> };
const SkillsCard: FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <CardBody>
        <VStack alignItems="left">
          {skills
            .sort((a, b) => -(a.comfort - b.comfort))
            .map((skill) => (
              <SkillBar
                skill={skill.skillName}
                comfort={skill.comfort}
                experience={skill.experience}
              />
            ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
