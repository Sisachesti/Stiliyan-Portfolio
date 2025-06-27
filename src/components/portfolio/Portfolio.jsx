import Card from "./Card";

import firstProjectPic from "../../img/first-project.png";
import plovdivUniPic from "../../img/plovdiv-uni.png";
import reactNextJsPic from "../../img/react-nextjs.jpg";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#EEB9A8] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-4xl font-bold text-[#003049] md:text-5xl">
            My Portfolio
          </p>
          <p className="mx-auto max-w-2xl text-lg text-[#003049]/80">
            Welcome to my creative journey! I'm a passionate student exploring
            the world of technology and design, constantly learning and growing
            through various projects.
          </p>
        </div>
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#003049]">
            My Journey in Photos
          </h2>
          <div className="grid grid-cols-1 grid-rows-3 gap-y-6">
            {/* Photo Card 1 */}
            <Card header="Project-Based Learning" img={firstProjectPic}>
              My first ever project that I created with ASP.NET Core + EF
              (Entity Framework) Core framework.
            </Card>
            <Card header="Educational Focus" img={plovdivUniPic} isEven>
              Currently pursuing Bachelor's degree at Plovdiv University,
              specializing in Software engineering.
            </Card>
            <Card header="Skill Progression" img={reactNextJsPic}>
              Progression of learning React, Next.js and Redux for becoming
              Full-stack.
            </Card>
          </div>
        </section>
        {/* Goals Section */}
        <section className="text-center">
          <div className="rounded-xl bg-white/20 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-3xl font-bold text-[#003049]">My Goals</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#336683]">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="mb-2 font-semibold text-[#003049]">
                  Learn & Grow
                </h3>
                <p className="text-sm text-[#003049]/80">
                  Continuously expanding my knowledge and skills in technology
                </p>
              </div>
              <div className="p-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#336683]">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="mb-2 font-semibold text-[#003049]">
                  Build Projects
                </h3>
                <p className="text-sm text-[#003049]/80">
                  Creating meaningful applications that solve real problems
                </p>
              </div>
              <div className="p-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#336683]">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="mb-2 font-semibold text-[#003049]">Connect</h3>
                <p className="text-sm text-[#003049]/80">
                  Building relationships and collaborating with fellow
                  developers
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
