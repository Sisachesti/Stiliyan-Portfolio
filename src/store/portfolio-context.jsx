import { useState, createContext } from "react";

import { BACKGROUND_COLORS } from "../background-colors.js";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext({
  activePage: "main-page",
  backgroundColor: BACKGROUND_COLORS["main-page"],
  isVisible: true,
  setActivePage: () => {},
});

export default function PortfolioContextProvider({ children }) {
  const [activePage, setActivePage] = useState("main-page");
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(
    BACKGROUND_COLORS[activePage],
  );

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

  const ctxValue = {
    activePage,
    isVisible,
    backgroundColor,
    setActivePage: handleSetActivePage,
  };

  return (
    <PortfolioContext.Provider value={ctxValue}>
      {children}
    </PortfolioContext.Provider>
  );
}
