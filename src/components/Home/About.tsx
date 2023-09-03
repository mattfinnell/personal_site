import { EmailIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import siteConfig from "../../siteConfig";
import { FileIcon, GithubIcon, LinkedInIcon } from "../Misc/SocialIcons";

import profilePhoto from "../../assets/profile_photo.png";
import { LinkItem } from "../Misc/Misc";

type AboutProps = {};
const About: FC<AboutProps> = () => {
  return (
    <Flex
      paddingY="vGutter"
      gap={{ base: "5", lg: "20" }}
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
    >
      <Box maxWidth={{ lg: "36rem" }}>
        {/* Circular Headshot */}
        <Circle
          display={{ base: "flex" }}
          position={"relative"}
          size="6.25rem"
          float="left"
          marginRight="6"
          overflow="hidden"
        >
          <Avatar size={"xl"} src={profilePhoto} />
        </Circle>

        <Heading
          lineHeight="1"
          fontSize={{ base: "3rem", md: "5rem", lg: "6.25rem" }}
          letterSpacing="tight"
        >
          I build{" "}
          <Box as="span" color="brown.600">
            Scalable Applications
          </Box>
        </Heading>
      </Box>

      <Box maxWidth={{ lg: "27.5rem" }} marginTop="4">
        <Text fontSize={{ base: "lg", md: "2xl" }}>
          An engineer of nearly 10 years with strong frontend and backend
          skills. Product Driven with a passion for <i>Better Engineering</i>.
        </Text>

        {/* Profile links */}
        <Center>
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={GithubIcon} href={siteConfig.profiles.github}>
              Github
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            <LinkItem icon={FileIcon} href={siteConfig.profiles.linkedin}>
              Resume
            </LinkItem>
          </SimpleGrid>
        </Center>
      </Box>
    </Flex>
  );
};

export default About;
