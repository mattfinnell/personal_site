import { Button, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

type ThemeSwitchProps = {};
const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} fontSize="sm">
      <Text>{colorMode === "light" ? "Light" : "Dark"} Theme</Text>
    </Button>
  );
};

export default ThemeSwitch;
