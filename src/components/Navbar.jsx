import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio-context";

import { ENGLISH, BULGARIAN } from "./lang/languages";

export default function Navbar() {
  const { setActivePage, language } = useContext(PortfolioContext);
  const navButtonsEN = language === 'en' ? ENGLISH.navbar["nav-buttons"] : BULGARIAN.navbar['nav-buttons'];

  return (
    <nav className="inline-flex rounded-full bg-slate-900 text-white [&>button]:cursor-pointer [&>button]:px-4 [&>button]:py-1 [&>button]:transition [&>button]:duration-150 [&>button]:hover:bg-slate-800">
      <button
        onClick={() => setActivePage("portfolio")}
        className="rounded-l-full"
      >
        {navButtonsEN[0]}
      </button>
      <button onClick={() => setActivePage("about")}>{navButtonsEN[1]}</button>
      <button
        onClick={() => setActivePage("contacts")}
        className="rounded-r-full"
      >
        {navButtonsEN[2]}
      </button>
    </nav>
  );
}
