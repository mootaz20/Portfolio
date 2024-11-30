import "./NavComp.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const NavComp = ({ handleThemeChnage }) => {
  const [mode, setmode] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleThemeChnageButton = () => {
    handleThemeChnage();
    setmode(!mode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navCom py-3 ${isSticky ? "stikcy" : ""}`}>
      <Container className="d-flex align-items-center justify-content-between">
        <div>
          <img
            src="/assets/images/Logo.png"
            alt="error"
            width={"150px"}
          />
        </div>
        <div>
          {mode ? (
            <MdDarkMode
            size={"50px"}
            color="white"
            className="cursor"
            onClick={handleThemeChnageButton}
            />
          ) : (
            <CiLight
              size={"50px"}
              color="white"
              className="cursor"
              onClick={handleThemeChnageButton}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavComp;
