export default function Footer() {
  return (
    <footer className="flex h-100 items-center justify-center bg-[#2A9D8F]">
      <div className="grid h-[70%] w-[70%] grid-cols-[70%_30%] bg-[#8AB17D] p-8">
        <div>
          <p className="text-3xl">Wanna keep in touch?</p>
          <p className="text-xl">Contact me here</p>
          <a
            href="mailto:siso95669@gmail.com"
            target="_self"
            className="text-[#264653] underline decoration-dotted underline-offset-2"
          >
            siso95669@gmail.com
          </a>
          <p className="text-[#264653] underline decoration-dashed underline-offset-2">
            Tel: +359 88 845 1660
          </p>
        </div>
        <div></div>
      </div>
      <p className="relative -top-52 left-12 inline-block font-[Comic_Relief] text-sm">
        Footer ↓
      </p>
    </footer>
  );
}
