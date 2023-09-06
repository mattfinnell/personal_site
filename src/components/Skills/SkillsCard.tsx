import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Skill } from "../../resume";
import SkillBar from "./SkillBar";
import fontAwesomeIconMap from "./fontAwesomeIconMap";

type TableRowProps = {
  skillName: string;
  experience: number;
  comfort: number;
};
const TableRow: FC<TableRowProps> = ({ skillName, experience, comfort }) => {
  const icon = fontAwesomeIconMap.get(skillName.toLowerCase());

  return (
    <Tr>
      <Td>
        {skillName} {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
      </Td>
      <Td>
        <i>
          {experience} year{experience === 1 ? "" : "s"}
        </i>
      </Td>
      <Td>
        <SkillBar comfort={comfort} />
      </Td>
    </Tr>
  );
};

type SkillsCardProps = { title: string; skills: Array<Skill> };
const SkillsCard: FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Skill</Th>
                <Th>Experience</Th>
                <Th>Comfort</Th>
              </Tr>
            </Thead>
            {skills
              .sort((a, b) => -(a.comfort - b.comfort))
              .map((skill) => (
                <TableRow
                  skillName={skill.skillName}
                  experience={skill.experience}
                  comfort={skill.comfort}
                />
              ))}
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
