import { Center } from "@chakra-ui/react";
import { FC } from "react";
import ConfettiExplosion from "react-confetti-explosion";

type ConfettiProps = {};
const Confetti: FC<ConfettiProps> = () => {
  return (
    <Center>
      <ConfettiExplosion />
    </Center>
  );
};

export default Confetti;
