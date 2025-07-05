const skills = ["React", "JavaScript", "C#", "SQL", "HTML/CSS"];

export default function AboutMainSection() {
  return (
    <section className="mb-16">
      <div className="rounded-xl bg-white/20 p-8 shadow-lg backdrop-blur-sm">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#003049]">
          Stiliyan Yanev
        </h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed text-[#003049]">
              I'm a dedicated student with a passion for creating meaningful
              digital experiences. While I may not have formal work experience
              yet, I'm constantly building my skills through personal projects
              and academic pursuits.
            </p>
            <p className="mb-4 leading-relaxed text-[#003049]">
              My journey in technology began with curiosity and has evolved into
              a genuine love for problem-solving and creative expression through
              code and design.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#DEB68A] px-3 py-1 text-sm font-semibold text-[#003049]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-48 w-48 items-center justify-center rounded-full bg-white/30">
              <span className="text-sm text-[#003049]"></span>
            </div>
            <p className="font-medium text-[#003049]"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
