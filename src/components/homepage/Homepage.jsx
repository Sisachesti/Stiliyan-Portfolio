import { useContext } from "react";

import { PortfolioContext } from "../../store/portfolio-context";
import TypewriterEffect from "./TypewriterEffect";

import { ENGLISH, BULGARIAN } from "../lang/languages";

export default function Homepage() {
  const { language } = useContext(PortfolioContext);
  let header;

  if (language === "en") {
    header = ENGLISH.homepage.header;
  } else {
    header = BULGARIAN.homepage.header;
  }

  return (
    <div className="selection:bg-[#063E56] selection:text-amber-300">
      <main className="flex min-h-screen w-full flex-col justify-center bg-[#eec764] px-[20%]">
        <p className="text-5xl">{header}</p>
        <TypewriterEffect />
      </main>
    </div>
  );
}
