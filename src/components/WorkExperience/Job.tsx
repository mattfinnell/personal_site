import {
  Card,
  HStack,
  Heading,
  Image,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import SkillChip from "../Misc/SkillChip";

type JobProps = {
  thumbnail: string;
  company: string;
  position: string;
  description: ReactNode;
  skills: Array<string>;
};
const Job: FC<JobProps> = ({
  thumbnail,
  company,
  position,
  description,
  skills,
}) => (
  <Card padding={8} maxW="40vw">
    <VStack alignItems="left">
      <HStack>
        <Square
          display={{ base: "none", lg: "flex" }}
          position={"relative"}
          size="5rem"
          float="left"
          marginRight="6"
          overflow="hidden"
        >
          <Image
            boxSize="100px"
            objectFit="scale-down"
            src={thumbnail}
            fallbackSrc="https://via.placeholder.com/100"
          />
        </Square>
        <Heading>{company}</Heading>
      </HStack>
      <Text fontSize="2xl">{position}</Text>
      <Text>{description}</Text>
      <HStack marginTop={3}>
        {skills.map((skill) => (
          <SkillChip label={skill} />
        ))}
      </HStack>
    </VStack>
  </Card>
);

export default Job;
