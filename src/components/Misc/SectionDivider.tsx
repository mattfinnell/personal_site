import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type SectionDivider = {
  children: ReactNode;
};
const SectionDivider: FC<SectionDivider> = ({ children }) => {
  return (
    <Box>
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
        {children}
      </Flex>
    </Box>
  );
};

export default SectionDivider;
