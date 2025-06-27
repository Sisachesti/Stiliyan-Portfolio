import { useContext } from "react";

import Navbar from "../components/Navbar";

import { PortfolioContext } from "../store/portfolio-context.jsx";

export default function Header() {
  const { setActivePage } = useContext(PortfolioContext);

  return (
    <header className="fixed z-50 flex w-full justify-between p-8 selection:bg-[#063E56] selection:text-amber-300">
      <button
        onClick={() => setActivePage("homepage")}
        className="cursor-pointer text-3xl font-bold transition duration-150 ease-in-out hover:text-slate-800"
      >
        Homepage
      </button>
      <Navbar />
    </header>
  );
}
