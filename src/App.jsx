import { useState, useEffect } from "react";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

import { BACKGROUND_COLORS } from "./background-colors";

const bgColors = BACKGROUND_COLORS;

function App() {
  const [activePage, setActivePage] = useState("about-me");
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(bgColors[activePage]);

  function handleSetActivePage(pageName) {
    setBackgroundColor(bgColors[pageName]);
    setIsVisible(false);
    setTimeout(() => {
      setActivePage(pageName);
      setIsVisible(true);
    }, 300);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls up on component change
  }, [activePage]);

  return (
    <div
      className={`bg-[${backgroundColor}] text-[#003049] selection:bg-[#287271] selection:text-[#F4A261]`}
    >
      <Header handleSetActivePage={handleSetActivePage} />
      <div
        className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {activePage === "about-me" && <AboutMe />}
        {activePage === "portfolio" && <Portfolio />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
