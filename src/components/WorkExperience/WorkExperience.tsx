import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import resume from "../../resume";
import SectionDivider from "../Misc/SectionDivider";
import JobCard from "./JobCard";

type WorkExperienceProps = {};
const WorkExperience: FC<WorkExperienceProps> = () => {
  return (
    <Box marginTop={16}>
      <SectionDivider>
        <Heading>Work Experience</Heading>
      </SectionDivider>
      <Flex
        paddingY="16"
        gap={{ base: "5", lg: "20" }}
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {resume.jobs.map((job, i) => (
            <JobCard
              key={`${i} - ${job.company}`}
              thumbnail={job.thumbnail}
              company={job.company}
              position={job.position}
              description={job.description}
              skills={job.skills}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default WorkExperience;
