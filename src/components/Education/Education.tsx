import {
  Box,
  Card,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import resume from "../../resume";
import SectionDivider from "../Misc/SectionDivider";
import CourseTable from "./CourseTable";

type EducationProps = {};
const Education: FC<EducationProps> = () => {
  return (
    <Box marginTop={16}>
      <SectionDivider>
        <Heading>Education</Heading>
      </SectionDivider>
      <Card marginTop={16} padding={8}>
        <VStack alignItems={{ base: "left" }}>
          <HStack>
            <Square
              position={"relative"}
              size={{ base: "6rem", sm: "10rem" }}
              float="left"
              marginRight="6"
              overflow="hidden"
            >
              <Image
                boxSize="150px"
                objectFit="scale-down"
                src={resume.education.thumbnail}
                fallbackSrc="https://via.placeholder.com/100"
                backgroundColor="white"
              />
            </Square>
            <Heading size={{ base: "md", sm: "lg" }}>
              {resume.education.school_name}
            </Heading>
            <Spacer />
            <Text display={{ base: "none", md: "block" }}>
              <i>
                {resume.education.arrival} - {resume.education.departure}
              </i>
            </Text>
          </HStack>
          <Text display={{ base: "block", md: "none" }}>
            <i>
              {resume.education.arrival} - {resume.education.departure}
            </i>
          </Text>
          <Text marginTop="4" fontSize="2xl">
            {resume.education.focus}
          </Text>
          <CourseTable />
          <SimpleGrid
            marginTop={3}
            spacingX={3}
            spacingY={2}
            columns={{ base: 3, md: 5 }}
          ></SimpleGrid>
        </VStack>
      </Card>
    </Box>
  );
};

export default Education;
