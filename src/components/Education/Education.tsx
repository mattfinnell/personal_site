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
import SectionDivider from "../Misc/SectionDivider";

type EducationProps = {};
const Education: FC<EducationProps> = () => {
  return (
    <Box marginTop={16}>
      <SectionDivider>
        <Heading>Education</Heading>
      </SectionDivider>
      <Card marginTop={16} padding={8} maxW={{ lg: "40vw" }}>
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
                src="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2017/09/29151258/Western-logo_no-background.png"
                fallbackSrc="https://via.placeholder.com/100"
                backgroundColor="white"
              />
            </Square>
            <Heading size="lg">Western Washington University</Heading>
            <Spacer />
            <Text>
              <i>Fall 2011 - Spring 2016</i>
            </Text>
          </HStack>
          <Text fontSize="2xl">Computer Science</Text>
          <TableContainer>
            <Table size="sm">
              <Tr>
                <Td>Datastructures + Algorithms II</Td>
                <Td>Database Systems</Td>
                <Td>Unix Development</Td>
                <Td>Object Oriented Design</Td>
              </Tr>
              <Tr>
                <Td>Statistical Methods</Td>
                <Td>Machine Learning</Td>
                <Td>Artificial Intelligence</Td>
                <Td>Data Mining</Td>
              </Tr>
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
