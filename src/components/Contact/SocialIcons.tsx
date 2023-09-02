import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

type SocialIconsProps = {};
const SocialIcons: FC<SocialIconsProps> = () => {
  const { hasCopied, onCopy } = useClipboard("mattfinnell104@gmail.com");
  return (
    <Stack spacing={{ base: 4, md: 8 }} direction={{ base: "column" }}>
      <Stack align="center" justify="space-around" direction={{ base: "row" }}>
        <Tooltip
          label={hasCopied ? "Email Copied!" : "Copy Email"}
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            aria-label="email"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<MdEmail />}
            _hover={{
              bg: "blue.500",
              color: useColorModeValue("white", "gray.700"),
            }}
            onClick={onCopy}
            isRound
          />
        </Tooltip>

        <Box as="a" href="#">
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<BsGithub />}
            _hover={{
              bg: "blue.500",
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
          />
        </Box>

        <Box as="a" href="#">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="lg"
            icon={<BsLinkedin size="28px" />}
            _hover={{
              bg: "blue.500",
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default SocialIcons;
