export default function GoalsValues() {
  return (
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
                  Technology evolves rapidly, and I believe in staying curious
                  and adaptable.
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
  );
}
