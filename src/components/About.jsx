import profileImg2 from "../img/profile2.jpg";

const skills = ["React", "JavaScript", "C#", "SQL", "HTML/CSS"];

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
        <section className="mb-16">
          <div className="rounded-xl bg-white/20 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#003049]">
              Stiliyan Yanev
            </h2>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4 leading-relaxed text-[#003049]">
                  I'm a dedicated student with a passion for creating meaningful
                  digital experiences. While I may not have formal work
                  experience yet, I'm constantly building my skills through
                  personal projects and academic pursuits.
                </p>
                <p className="mb-4 leading-relaxed text-[#003049]">
                  My journey in technology began with curiosity and has evolved
                  into a genuine love for problem-solving and creative
                  expression through code and design.
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
                  <span className="text-sm text-[#003049]">
                    <img
                      src={profileImg2}
                      alt="Profile Pic"
                      className="rounded-full border-4 border-[#D4A373]"
                    />
                  </span>
                </div>
                <p className="font-medium text-[#003049]">Another pic 😎</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <div className="rounded-xl bg-white/15 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#003049]">
              My Goals & Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#003049]">
                  Short-term Goals
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#287271]"></div>
                    <p className="text-[#003049]/80">
                      Complete from 2 to 3 substantial projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#287271]"></div>
                    <p className="text-[#003049]/80">
                      Master React and modern JavaScript frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#287271]"></div>
                    <p className="text-[#003049]/80">
                      Contribute to open source projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#287271]"></div>
                    <p className="text-[#003049]/80">
                      Land my first internship or junior developer role
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#003049]">
                  Core Values
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/20 p-4">
                    <h4 className="mb-1 font-semibold text-[#003049]">
                      Continuous Learning
                    </h4>
                    <p className="text-sm text-[#003049]/80">
                      Technology evolves rapidly, and I believe in staying
                      curious and adaptable.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/20 p-4">
                    <h4 className="mb-1 font-semibold text-[#003049]">
                      Quality Over Quantity
                    </h4>
                    <p className="text-sm text-[#003049]/80">
                      I focus on writing clean, maintainable code rather than
                      rushing through projects.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/20 p-4">
                    <h4 className="mb-1 font-semibold text-[#003049]">
                      User-Centered Design
                    </h4>
                    <p className="text-sm text-[#003049]/80">
                      Every application should be built with the end user's
                      experience in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
