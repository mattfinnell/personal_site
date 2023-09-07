import {
  Card,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import SkillChip from "../Skills/SkillChip";

type JobCardProps = {
  thumbnail: string;
  company: string;
  position: string;
  description: ReactNode;
  skills: Array<string>;
};
const JobCard: FC<JobCardProps> = ({
  thumbnail,
  company,
  position,
  description,
  skills,
}) => (
  <Card padding={8} maxW={{ lg: "40vw" }}>
    <VStack alignItems="left">
      <HStack>
        <Square
          position={"relative"}
          size="4rem"
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
        <Heading size="lg">{company}</Heading>
      </HStack>
      <Text fontSize="2xl">{position}</Text>
      <Text>{description}</Text>
      <SimpleGrid
        marginTop={3}
        spacingX={3}
        spacingY={2}
        columns={{ base: 3, md: 5 }}
      >
        {skills.map((skill) => (
          <SkillChip label={skill} />
        ))}
      </SimpleGrid>
    </VStack>
  </Card>
);

export default JobCard;
