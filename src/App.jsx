import { useContext } from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

import PortfolioContextProvider from "./store/portfolio-context";
import { PortfolioContext } from "./store/portfolio-context";

function App() {
  const { activePage, backgroundColor, isVisible } =
    useContext(PortfolioContext);

  return (
    <div
      className={`bg-[${backgroundColor}] text-[#003049] selection:bg-[#287271] selection:text-[#F4A261]`}
    >
      <Header />
      <div
        className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {activePage === "homepage" && <Homepage />}
        {activePage === "portfolio" && <Portfolio />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
