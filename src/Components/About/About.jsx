import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <>
      <div className={`mt-5 pt-5 mb-5 `}>
        <Container>
          <Heading title={"About Me"} />
          <div className="mt-5 pt-5">
            <Row>
              <Col sm={12} md={6} className="text-center mb-5">
                <div data-aos="fade-right" className="w-100 h-100">
                  <iframe
                    src="https://lottie.host/embed/638ad72e-c8c6-45ab-8398-20d6c4ed8f72/ysL4iLeXpD.json"
                    width={"100%"}
                    height={"100%"}></iframe>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div data-aos="fade-left">
                  <h1 className="fw-bolder">Hey There! I am Mootaz Alhalak</h1>
                  <p className="fw-bold">
                    I am a passionate full-stack software engineer specializing
                    in the MERN stack (MongoDB, Express.js, React, Node.js). I
                    enjoy building clear, creative solutions for web development
                    projects, working on everything from easy-to-use front-end
                    designs to strong back-end systems. I love taking ideas and
                    turning them into fully functional websites and applications
                    that look great and work smoothly. I’m always exploring new
                    technologies and learning how to improve my skills to stay
                    up-to-date with the latest trends. Whether it’s improving
                    performance, adding useful features, or making things easier
                    for users, I’m always excited to take on new challenges.
                    Let’s connect and create something amazing together!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
