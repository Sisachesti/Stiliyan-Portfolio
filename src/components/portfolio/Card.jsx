export default function Card({
  img,
  alt = "Picture",
  header,
  isEven,
  children,
}) {
  return (
    <div className="rounded-xl bg-white/20 p-4 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
      <div
        className={`flex items-center gap-4 ${isEven ? "flex-row-reverse" : ""}`}
      >
        <div className="flex h-60 w-60 flex-shrink-0 items-center justify-center border-4 border-[#DF817A]/80 shadow-xl/20 shadow-[#C1121F]">
          <img className="h-full w-full object-cover" src={img} alt={alt} />
        </div>
        <div className={`flex-1 ${isEven ? "text-right" : ""}`}>
          <h3 className="mb-2 font-semibold text-[#003049] text-4xl">{header}</h3>
          <p className="text-lg text-[#003049]/80">{children}</p>
        </div>
      </div>
    </div>
  );
}
