import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FC } from "react";
import resume from "../../resume";
import SectionDivider from "../Misc/SectionDivider";
import SkillsCard from "./SkillsCard";

type SkillsProps = {};
const Skills: FC<SkillsProps> = () => {
  return (
    <VStack>
      <SectionDivider>
        <Heading>Skills</Heading>
      </SectionDivider>
      <SimpleGrid columns={{ base: 1, lg: 2 }} marginTop={16} spacing={12}>
        <SkillsCard title="Frontend Skills" skills={resume.skills.frontend} />
        <SkillsCard title="Backend Skills" skills={resume.skills.backend} />
        <SkillsCard title="DevOps Skills" skills={resume.skills.devops} />
      </SimpleGrid>
    </VStack>
  );
};

export default Skills;
