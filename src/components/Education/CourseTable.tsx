import { Table, TableContainer, Td, Tr } from "@chakra-ui/react";
import { chunk } from "lodash";
import { FC } from "react";
import resume from "../../resume";

type CourseTableProps = {};
const CourseTable: FC<CourseTableProps> = () => {
  return (
    <>
      <TableContainer display={{ base: "table", sm: "none" }}>
        <Table size="sm">
          {chunk(resume.education.courses, 1).map(
            (courseRow: Array<string>) => (
              <Tr key={courseRow.toString()}>
                {courseRow.map((course) => (
                  <Td key={course}>{course}</Td>
                ))}
              </Tr>
            ),
          )}
        </Table>
      </TableContainer>
      <TableContainer display={{ base: "none", sm: "table", md: "none" }}>
        <Table size="sm">
          {chunk(resume.education.courses, 2).map(
            (courseRow: Array<string>) => (
              <Tr key={courseRow.toString()}>
                {courseRow.map((course) => (
                  <Td key={course}>{course}</Td>
                ))}
              </Tr>
            ),
          )}
        </Table>
      </TableContainer>
      <TableContainer display={{ base: "none", md: "table" }}>
        <Table size="sm">
          {chunk(resume.education.courses, 4).map(
            (courseRow: Array<string>) => (
              <Tr key={courseRow.toString()}>
                {courseRow.map((course) => (
                  <Td key={course}>{course}</Td>
                ))}
              </Tr>
            ),
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default CourseTable;
