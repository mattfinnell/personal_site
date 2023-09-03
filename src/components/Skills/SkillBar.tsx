import { Box, HStack, Progress, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import fontAwesomeIconMap from "./fontAwesomeIconMap";

type SkillBarProps = { skill: string; comfort: number; experience: number };
const SkillBar: FC<SkillBarProps> = ({ skill, comfort, experience }) => {
  const icon = fontAwesomeIconMap.get(skill.toLowerCase());

  return (
    <HStack>
      <HStack>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        <Text>{skill}</Text>
      </HStack>
      <Text>
        <i>
          {experience} year{experience === 1 ? "" : "s"}
        </i>
      </Text>
      <Box minWidth={200}>
        <Progress
          colorScheme="green"
          hasStripe={true}
          size="sm"
          value={comfort}
        />
      </Box>
    </HStack>
  );
};

export default SkillBar;
