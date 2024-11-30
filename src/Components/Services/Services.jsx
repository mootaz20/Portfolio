import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import Heading from "../Heading/Heading";
import { FaDatabase, FaFileCode, FaServer } from "react-icons/fa";
import ServicesCard from "./ServicesCard/ServicesCard";
import { CgWebsite } from "react-icons/cg";

const ServicesArr = [
  {
    id: 1,
    icon: <FaFileCode size={"120px"} className="txt-color" />,
    name: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React, Angular.",
  },
  {
    id: 2,
    icon: <FaServer size={"120px"} className="txt-color" />,
    name: "Backend Development",
    desc: "Developing robust server-side applications using Node.js And Express.js with focus on performance and scalability.",
  },
  {
    id: 3,
    icon: <CgWebsite size={"120px"} className="txt-color" />,
    name: "Full Stack Development",
    desc: "End-to-end application development covering both frontend and backend technologies.",
  },
  {
    id: 4,
    icon: <FaDatabase size={"120px"} className="txt-color" />,
    name: "Database Design",
    desc: "Efficient database architecture and management solutions for your applications.",
  },
];

const Services = () => {
  return (
    <>
      <div className="mt-5 pt-5 pb-5">
        <Container>
          <Heading title={"My Services"} />
          <Row className="justify-content-center mt-5 pt-5">
            <Col sm={12} md={8}>
              <p className="fw-bold">
                Transform your digital presence with professional web
                development services that blend technical excellence with
                business insight. From concept to deployment, I create scalable
                solutions that help your business grow and succeed in todays
                digital landscape.
              </p>
              <Row className="my-5 px-3">
                {ServicesArr.map((item) => {
                  return (
                    <Col key={item.id} sm={12} lg={6} className="mb-5">
                      <div
                        data-aos={
                          item.id % 2 === 1 ? "fade-right" : "fade-left"
                        }>
                        <ServicesCard
                          icon={item.icon}
                          name={item.name}
                          desc={item.desc}
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
