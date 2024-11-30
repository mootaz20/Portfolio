import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import NavComp from "./Components/NavComp/NavComp";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import { createContext, useEffect, useState } from "react";
import ScrollProgressBar from "./Components/ScrollProgressBar/ScrollProgressBar";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChnage = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div
          className={`${
            theme === "light" ? "bg-white text-dark" : "bg-dark text-white"
          }`}>
          <ScrollProgressBar />
          <ScrollToTop />
          <NavComp handleThemeChnage={handleThemeChnage} />
          <Hero />
          <div data-aos="fade-up">
            <About />
          </div>
          <div data-aos="fade-up">
            <Skills />
          </div>
          <div data-aos="fade-up">
            <Services />
          </div>
          <div data-aos="fade-up">
            <MyWork />
          </div>
          <div data-aos="fade-up">
            <Contact />
          </div>
          <div data-aos="fade-up">
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
