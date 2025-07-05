import { useContext } from "react";

import Header from "./components/Header";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

import { PortfolioContext } from "./store/portfolio-context";

function App() {
  const { activePage, backgroundColor, isVisible } =
    useContext(PortfolioContext);

  return (
    <div
      className={`bg-[${backgroundColor}] text-[#003049]`}
    >
      <Header />
      <div
        className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {activePage === "homepage" && <Homepage />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "about" && <About />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
