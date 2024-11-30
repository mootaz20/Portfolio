import { Col, Container, Row } from "react-bootstrap";
import "./Skills.css";
import Heading from "../Heading/Heading";
import SkillsProgress from "./SkillsProgress/SkillsProgress";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular, FaNetworkWired, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBulma, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <IoLogoHtml5 size={"60px"} color="#E34F26" /> },
  { name: "CSS", icon: <IoLogoCss3 size={"60px"} color="#1572B6" /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={"60px"} color="#F7DF1E" />,
  },
  { name: "React", icon: <FaReact size={"60px"} color="#61DAFB" /> },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={"60px"} color="#007ACC" />,
  },
  { name: "Angular", icon: <FaAngular size={"60px"} color="#DD0031" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={"60px"} color="#7952B3" /> },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill size={"60px"} color="#38B2AC" />,
  },
  { name: "Bulma", icon: <SiBulma size={"60px"} color="#00D1B2" /> },
  { name: "Node.js", icon: <FaNodeJs size={"60px"} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={"60px"} color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb size={"60px"} color="#47A248" /> },
  {
    name: "RESTful APIs",
    icon: <FaNetworkWired size={"60px"} color="#4A4A4A" />,
  },
];

const Skills = () => {
  return (
    <>
      <div className="bg-second pt-5 pb-5">
        <Container className="pt-4">
          <Heading title={"Skills"} />
          <Row className="mt-5">
            {skills.map((item, index) => {
              return (
                <Col key={index} xs={6} sm={6} md={4} lg={3} className="p-3">
                  <SkillsProgress skill={item.name} icon={item.icon} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
