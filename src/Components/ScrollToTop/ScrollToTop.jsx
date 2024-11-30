import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      {show && (
        <div
          className="position-fixed scrolToTop"
          style={{ right: "20px", bottom: "20px" }}>
          <button
            className="bg-primary border-0 rounded text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FaArrowUp size={"22px"} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
