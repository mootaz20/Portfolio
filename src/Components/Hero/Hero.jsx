import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import ButtonCom from "../ButtonCom/ButtonCom";
import AnimatedText from "../AnimatedText/AnimatedText";

const Hero = () => {
  return (
    <div className="hero pt-5 position-relative">
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col sm={12} md={7} className="text-center text-md-start">
            <h2 className="text-white mt-5">Hello, I AM</h2>
            <h1 className="text-white name">mootaz alhalak</h1>
            <div className="mt-3 mb-3">
              <AnimatedText />
            </div>
            <ButtonCom text={"SEE MY WORK"} />
            <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-5 p-1">
              <a
                href="https://www.linkedin.com/in/mootaz-alhalak-30a561255"
                className="text-white">
                <FaLinkedin size={"35px"} className="icon" />
              </a>
              <a href="https://github.com/mootaz20" className="text-white">
                <FaGithub size={"35px"} className="icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100014620451120"
                className="text-white">
                <FaFacebook size={"35px"} className="icon" />
              </a>
            </div>
          </Col>
          <Col sm={12} md={5} className="pt-4 text-center">
            <iframe
              className="iframe"
              title="Lottie Animation"
              src="https://lottie.host/embed/5d5f3ad4-7e39-4772-9c7d-ca0e2c4679e3/5L4rFim40n.json"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
