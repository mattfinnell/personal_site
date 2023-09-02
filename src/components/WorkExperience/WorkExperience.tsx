import { Flex, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import resume from "../../resume";
import Job from "./Job";

type WorkExperienceProps = {};
const WorkExperience: FC<WorkExperienceProps> = () => {
  return (
    <Flex
      paddingY="16"
      gap={{ base: "5", lg: "20" }}
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
    >
      <SimpleGrid columns={2} spacing={10}>
        {resume.jobs.map((job) => (
          <Job
            thumbnail={job.thumbnail}
            company={job.company}
            position={job.position}
            description={job.description}
            skills={job.skills}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default WorkExperience;
