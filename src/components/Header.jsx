import { useContext } from "react";

import Navbar from "../components/Navbar";

import { PortfolioContext } from "../store/portfolio-context.jsx";
import { ENGLISH, BULGARIAN } from "./lang/languages.js";

export default function Header() {
  const { setActivePage, language, setLanguage } = useContext(PortfolioContext);

  return (
    <>
      <header className="fixed z-50 flex w-full justify-between p-8 selection:bg-[#063E56] selection:text-amber-300">
        <button
          onClick={() => setActivePage("homepage")}
          className="cursor-pointer text-3xl font-bold transition duration-150 ease-in-out hover:text-slate-800"
        >
          {language === "en"
            ? ENGLISH.navbar["nav-buttons"][3]
            : BULGARIAN.navbar["nav-buttons"][3]}
        </button>
        <Navbar />
      </header>

      <div className="fixed right-4 bottom-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`cursor-pointer rounded-lg px-3 py-2 font-medium transition duration-200 ${
            language === "en"
              ? "bg-[#063E56] text-amber-300 shadow-lg"
              : "bg-white text-[#063E56] shadow-md hover:bg-gray-100"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("bg")}
          className={`cursor-pointer rounded-lg px-3 py-2 font-medium transition duration-200 ${
            language === "bg"
              ? "bg-[#063E56] text-amber-300 shadow-lg"
              : "bg-white text-[#063E56] shadow-md hover:bg-gray-100"
          }`}
        >
          BG
        </button>
      </div>
    </>
  );
}
