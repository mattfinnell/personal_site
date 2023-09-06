import { Box, Tag, TagLabel } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import fontAwesomeIconMap from "./fontAwesomeIconMap";

type SkillChipProps = {
  label: string;
};
const SkillChip: FC<SkillChipProps> = ({ label }) => {
  const icon = fontAwesomeIconMap.get(label.toLowerCase());

  return (
    <Tag>
      <Box marginRight={icon ? 2 : 0}>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </Box>
      <TagLabel fontSize={12}>{label}</TagLabel>
    </Tag>
  );
};

export default SkillChip;
