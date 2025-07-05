import { useState, createContext } from "react";

import { BACKGROUND_COLORS } from "../background-colors.js";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext({
  activePage: "homepage",
  language: "bg",
  backgroundColor: BACKGROUND_COLORS["homepage"],
  isVisible: true,
  setActivePage: () => {},
  setLanguage: () => {},
});

export default function PortfolioContextProvider({ children }) {
  const [activePage, setActivePage] = useState("homepage");
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(
    BACKGROUND_COLORS[activePage],
  );
  const [language, setLanguage] = useState("bg");

  const handleSetActivePage = (pageName) => {
    if (activePage !== pageName) {
      setBackgroundColor(BACKGROUND_COLORS[pageName]);
      setIsVisible(false);
      setTimeout(() => {
        setActivePage(pageName);
        setIsVisible(true);
      }, 300);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  const ctxValue = {
    activePage,
    language,
    isVisible,
    backgroundColor,
    setActivePage: handleSetActivePage,
    setLanguage: handleSetLanguage,
  };

  return (
    <PortfolioContext.Provider value={ctxValue}>
      {children}
    </PortfolioContext.Provider>
  );
}
