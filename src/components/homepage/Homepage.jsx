import TypewriterEffect from "./TypewriterEffect";

export default function Homepage() {
  return (
    <div className="selection:bg-[#063E56] selection:text-amber-300">
      <main className="flex min-h-screen w-full flex-col justify-center bg-[#eec764] px-[20%]">
        <p className="text-5xl">Hi, I'm Stiliyan Yankov Yanev,</p>
        <TypewriterEffect />
      </main>
    </div>
  );
}
