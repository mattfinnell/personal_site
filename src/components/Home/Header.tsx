import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Emoji, MainHeading } from "../Misc/Misc";

type ProfileHeaderProps = {};
export const ProfileHeader: FC<ProfileHeaderProps> = () => {
  return (
    <Flex direction="column" paddingY="24">
      <Box>
        <MainHeading>Matt Finnell</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize="3xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
        >
          Fullstack Software Engineer
        </Text>
      </Box>
      <Box
        marginTop="14"
        fontFamily="body"
        maxWidth="40rem"
        fontSize={{ base: "lg", md: "2xl" }}
      >
        <VStack alignItems="left">
          <Text>
            <Emoji label="evergreen">🌲</Emoji>Pacific Northwest Local
          </Text>
          <Text>
            <Emoji label="notes">🎵</Emoji>Music Enthusiast
          </Text>
          <Text>
            <Emoji label="snowboarder">🏂</Emoji>Snowboarder
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};
