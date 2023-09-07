import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  VStack,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import resume from "../../resume";

type ContactFormProps = {
  onSuccess: () => void;
  onFailure: () => void;
};
const ContactForm: FC<ContactFormProps> = ({ onSuccess, onFailure }) => {
  const { hasCopied, onCopy } = useClipboard(resume.contact.email);

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box borderRadius="lg" m={{ base: 5, md: 16 }} p={{ base: 5 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading
              fontSize={{
                base: "4xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack spacing={{ base: 4, md: 8 }} direction={{ base: "column" }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row" }}
              >
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

                <Box as="a" href={resume.contact.github}>
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

                <Box as="a" href={resume.contact.linkedin}>
                  <IconButton
                    aria-label="resume"
                    variant="ghost"
                    size="lg"
                    icon={<AiOutlineFileText size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Box>

                <Box as="a" href={resume.contact.linkedin}>
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

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    width="full"
                    onClick={onSuccess}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactForm;
