import {
  Box,
  Card,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Square,
  Table,
  TableContainer,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import resume from "../../resume";
import SectionDivider from "../Misc/SectionDivider";
const _ = require("lodash");

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
              size="4rem"
              float="left"
              marginRight="6"
              overflow="hidden"
            >
              <Image
                boxSize="100px"
                objectFit="scale-down"
                src={resume.education.thumbnail}
                fallbackSrc="https://via.placeholder.com/100"
                backgroundColor="white"
              />
            </Square>
            <Heading size="lg">{resume.education.school_name}</Heading>
            <Spacer />
            <Text>
              <i>
                {resume.education.arrival} - {resume.education.departure}
              </i>
            </Text>
          </HStack>
          <Text marginTop="4" fontSize="2xl">
            {resume.education.focus}
          </Text>
          <TableContainer>
            <Table size="sm">
              {_.chunk(resume.education.courses, 4).map(
                (courseRow: Array<string>) => (
                  <Tr>
                    {courseRow.map((course) => (
                      <Td>{course}</Td>
                    ))}
                  </Tr>
                ),
              )}
            </Table>
          </TableContainer>
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
