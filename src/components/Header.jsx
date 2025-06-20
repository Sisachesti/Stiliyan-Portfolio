import Navbar from "../components/Navbar";

export default function Header({handleSetActivePage}) {
  return (
    <header className="fixed flex w-full justify-between p-8">
      <button onClick={() => handleSetActivePage('about-me')} className="cursor-pointer text-3xl font-bold transition duration-150 ease-in-out hover:text-slate-800">
        Stiliyan Yanev
      </button>
      <Navbar setActivePage={handleSetActivePage}/>
    </header>
  );
}
