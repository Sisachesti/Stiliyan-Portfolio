import { useContext } from "react";

import { PortfolioContext } from "../store/portfolio-context";

export default function Navbar() {
  const { setActivePage } = useContext(PortfolioContext);

  return (
    <nav className="inline-flex rounded-full bg-slate-900 text-white [&>button]:cursor-pointer [&>button]:px-4 [&>button]:py-1 [&>button]:transition [&>button]:duration-150 [&>button]:hover:bg-slate-800">
      <button
        onClick={() => setActivePage("portfolio")}
        className="rounded-l-full"
      >
        Portfolio
      </button>
      <button onClick={() => setActivePage("about")}>About</button>
      <button
        onClick={() => setActivePage("contacts")}
        className="rounded-r-full"
      >
        Contacts
      </button>
    </nav>
  );
}
