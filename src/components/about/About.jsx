import AboutMainSection from "./AboutMainSection";
import GoalsValues from "./GoalsValues";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F1DBB7] px-6 py-12 selection:bg-[#D4A373] selection:text-[#FEFAE0]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#003049]">About Me</h1>
          <p className="mx-auto max-w-2xl text-xl text-[#003049]/70">
            Get to know the person behind the code - my story, passions, and
            aspirations
          </p>
        </div>
        <AboutMainSection />
        <GoalsValues />
      </div>
    </main>
  );
}
