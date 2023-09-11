import { Box, Progress } from "@chakra-ui/react";
import { FC } from "react";

type SkillBarProps = { comfort: number };
const SkillBar: FC<SkillBarProps> = ({ comfort }) => {
  return (
    <Box minWidth={50}>
      <Progress
        colorScheme="green"
        hasStripe={true}
        size="sm"
        value={comfort}
        aria-label={`comfort ${comfort} percent`}
      />
    </Box>
  );
};

export default SkillBar;
