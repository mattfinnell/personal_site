import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import siteConfig from "../../siteConfig";
import { LinkItem } from "../Misc/Misc";
import SectionDivider from "../Misc/SectionDivider";
import { EmailIcon, GithubIcon, LinkedInIcon } from "../Misc/SocialIcons";

type ContactSectionProps = {};
const ContactSection: FC<ContactSectionProps> = () => {
  return (
    <Box marginTop={16}>
      <SectionDivider>
        <Heading>Contact</Heading>
      </SectionDivider>
      <VStack marginTop={16}>
        <Heading size="md">
          Feel free to get a hold of me via the following...
        </Heading>
        <HStack marginTop={8}>
          <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
            LinkedIn
          </LinkItem>
          <LinkItem icon={GithubIcon} href={siteConfig.profiles.github}>
            Github
          </LinkItem>
          <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
            Email
          </LinkItem>
        </HStack>
        <Heading size="md" marginTop={8}>
          Cheers!
        </Heading>
      </VStack>
    </Box>
  );
};

export default ContactSection;
