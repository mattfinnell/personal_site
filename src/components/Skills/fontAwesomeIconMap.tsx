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

export default fontAwesomeIconMap;
