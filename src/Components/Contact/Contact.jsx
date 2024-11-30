import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import Heading from "../Heading/Heading";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ContactCard from "./ContactCard/ContactCard";
import FormCom from "./FormCom/FormCom";

const cards = [
  {
    id: 1,
    icon: <FaLocationDot size={"65px"} className="txt-color" />,
    title: "Syria, Damascus",
  },
  {
    id: 2,
    icon: <FaPhoneFlip size={"65px"} className="txt-color" />,
    title: "(+963) 959902075",
  },
  {
    id: 3,
    icon: <IoMdMail size={"65px"} className="txt-color" />,
    title: "mootazalhalak695@gmail.com",
  },
];

const Contact = () => {
  return (
    <>
      <div className="mt-5 pt-5 pb-5">
        <Container className="text-center">
          <Heading title={"Contact Me"} />
          <Row className="justify-content-center mt-5 pt-5">
            {cards.map((item) => {
              return (
                <Col key={item.id} sm={12} lg={5} className="mb-5">
                  <div
                    data-aos={item.id % 2 === 1 ? "fade-right" : "fade-left"}>
                    <ContactCard title={item.title} icon={item.icon} />
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center mt-5">
            <Col sm={12} lg={7}>
              <div data-aos="fade-up">
                <FormCom />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
