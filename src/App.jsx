import { useState } from "react";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("about-me");

  function handleSetActivePage(pageName) {
    setActivePage(pageName);
  }

  return (
    <div className="selection:bg-[#287271] selection:text-[#F4A261]">
      <Header handleSetActivePage={handleSetActivePage} />
      {activePage === "about-me" && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
