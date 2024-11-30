import { Col, Container, Row } from "react-bootstrap";
import "./MyWork.css";
import Heading from "../Heading/Heading";
import { works } from "./Works/Works";


const MyWork = () => {
  return (
    <>
      <div className="bg-second myWork pt-5 mt-5 pb-5">
        <Container className="pt-4 text-center">
          <Heading title={"My Work"} />
          <Row className="justify-content-center mt-5 pt-5">
            <Col sm={12} md={10}>
              <Row className="position-relative">
                {works.map((item) => (
                  <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                    <div data-aos="flip-left">
                      <a href={item.demo}>
                        <div className="image-container">
                          <img src={item.img} alt="Work sample" />
                          <div className="overlay">
                            <div className="techniques">
                              {item.techniques.map((technique, index) => (
                                <span key={index} className="technique-tag">
                                  {technique}
                                </span>
                              ))}
                            </div>
                            <div className="frameworks">
                              {item.frameworks.map((framework, index) => (
                                <span key={index} className="framework-tag">
                                  {framework}
                                </span>
                              ))}
                            </div>
                            <div className="responsive-info">
                              {item.isResponsive
                                ? "Responsive"
                                : "Not Responsive"}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyWork;
