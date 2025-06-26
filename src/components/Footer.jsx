import profilePic from "../img/profile.jpg";

export default function Footer() {
  return (
    <footer className="flex h-100 items-center justify-center bg-[#B2C6C9] text-[#003049]">
      <div className="grid h-[70%] w-[90%] grid-cols-[33%_34%_33%] bg-[#FDF0D5] p-8">
        <div className="flex flex-col justify-evenly">
          <div>
            <p className="text-3xl">Wanna keep in touch?</p>
            <p className="text-xl">Contact me here:</p>
          </div>
          <div>
            <a href="mailto:siso95669@gmail.com" target="_self">
              E-mail:{" "}
              <span className="text-[#264653] underline decoration-dotted underline-offset-2">
                siso95669@gmail.com
              </span>
            </a>
            <p>
              Tel:{" "}
              <span className="text-[#264653] underline decoration-dashed underline-offset-2">
                +359 88 845 1660
              </span>
            </p>
            <a
              href="https://www.linkedin.com/in/stiliyan-yanev-4a526b319/"
              target="_blank"
            >
              LinkedIn:{" "}
              <span className="text-[#264653] underline decoration-dashed underline-offset-2">
                Stiliyan Yanev
              </span>
            </a>
          </div>
        </div>
        <div>
          <p></p>
        </div>
        <div className="flex items-center justify-end">
          <img
            src={profilePic}
            alt="My Profile Picture"
            className="h-44 border-6"
          />
        </div>
      </div>
    </footer>
  );
}
