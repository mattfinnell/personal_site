import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

import { FC } from "react";
import { Link } from "react-router-dom";
import ContactButton from "../Contact/ContactButton";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { RouteType, routes } from "./routes";

type NavigationBarProps = {
  routes: Array<RouteType>;
};
const NavigationBar: FC<NavigationBarProps> = ({ routes }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">Matt Finnell</Link>
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav routes={routes} />
          </Flex>
        </Flex>
        <HStack spacing={4}>
          <ThemeSwitch />
          <ContactButton />
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav routes={routes} />
      </Collapse>
    </Box>
  );
};

type DesktopNavProps = {} & NavigationBarProps;
const DesktopNav: FC<DesktopNavProps> = ({ routes }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {routes.map((route) => (
        <Box key={route.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Link to={route.path}>{route.label}</Link>
              </Box>
            </PopoverTrigger>

            {route.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {route.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, path, subLabel }: RouteType) => {
  return (
    <Box
      as="a"
      href={path}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

type MobileNavProps = {} & NavigationBarProps;
const MobileNav: FC<MobileNavProps> = ({ routes }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {routes.map((route) => (
        <MobileNavItem key={route.label} {...route} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }: RouteType) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={path ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.path}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default NavigationBar;

type NavigationBarContainerProps = {};
const NavigationBarContainer: FC<NavigationBarContainerProps> = () => {
  return <NavigationBar routes={routes} />;
};

export { NavigationBarContainer };
