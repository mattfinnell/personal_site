import { Box, Tag, TagLabel } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faAws,
  faCss3,
  faDocker,
  faGit,
  faHtml5,
  faJs,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const fontAwesomeIconRegistry: Array<[string, IconProp]> = [
  ["python", faPython],
  ["hacklang", faPhp],
  ["html", faHtml5],
  ["css", faCss3],
  ["javascript", faJs],
  ["typescript", faJs],
  ["git", faGit],
  ["aws", faAws],
  ["react", faReact],
  ["docker", faDocker],
  ["angular", faAngular],
];

const fontAwesomeIconMap = new Map<string, IconProp>();
fontAwesomeIconRegistry.forEach(([key, value]: [string, IconProp]) =>
  fontAwesomeIconMap.set(key, value),
);

type SkillChipProps = {
  label: string;
};
const SkillChip: FC<SkillChipProps> = ({ label }) => {
  const icon = fontAwesomeIconMap.get(label.toLowerCase());

  return (
    <Tag>
      <Box marginRight={2}>{icon ? <FontAwesomeIcon icon={icon} /> : null}</Box>
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};

export default SkillChip;
