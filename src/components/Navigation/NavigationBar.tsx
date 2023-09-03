"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ContactAvatarButton from "../Contact/ContactAvatarButton";
import { RouteType, routes } from "./routes";

type NavigationBarProps = {
  routes: Array<RouteType>;
};
const NavigationBar: FC<NavigationBarProps> = ({ routes }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">Matt Finnell</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {routes.map((route: RouteType) => (
                <Link key={route.label} to={route.path}>
                  {route.label}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} marginRight={2}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <ContactAvatarButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {routes.map((route: RouteType) => (
                <Link key={route.label} to={route.path}>
                  {route.label}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

type NavigationBarContainerProps = {};
const NavigationBarContainer: FC<NavigationBarContainerProps> = () => {
  return <NavigationBar routes={routes} />;
};

export { NavigationBarContainer };
