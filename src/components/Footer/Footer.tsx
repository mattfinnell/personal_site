import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function LargeWithLogoCentered() {
  const year = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      marginTop={16}
    >
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Heading color="gray.400" fontWeight={400} fontSize="lg">
            Matt Finnell
          </Heading>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {year} Matt Finnell. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
