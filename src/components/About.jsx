import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 flex flex-col lg:flex-row justify-center items-center gap-5 px-10 py-24"
    >
      <div className="w-full flex order-2 lg:order-1 flex-col gap-2 lg:w-[45%] text-white">
        <h2 className="text-3xl">
          About <span className="text-teal-300 font-semibold">Me</span>
        </h2>
        <h3 className="text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text font-bold">
          Full Stack Developer
        </h3>
        <p>
          As a Full Stack Developer, I thrive on creating innovative web
          applications that connect with users. My expertise in technologies
          like <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>, and{" "}
          <span className="font-semibold">Node.js</span> allows me to build
          seamless, responsive solutions that not only meet client needs but
          also enhance user experiences. I am dedicated to continuous learning
          and enjoy tackling new challenges that push my skills further. My goal
          is to craft impactful digital experiences that make a difference.
        </p>
        <a
          href="https://drive.google.com/file/d/17klOTEGjWlQO8CSRBR5gmd15wE_M0xpS/view?usp=drive_link"
          target="_blank"
        >
          <button className="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-orange-500 transition duration-700 px-5 py-2 rounded-full font-semibold mt-5 w-full">
            Download Resume
          </button>
        </a>
      </div>
      <div className="w-[250px] order-1 lg:order-2 lg:w-[45%] lg:h-[60vh] object-scale-down flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="shadow-lg shadow-teal-500 hover:shadow-indigo-500 rotate-6 hover:rotate-0 rounded-2xl transition duration-700"
        />
      </div>
    </section>
  );
};

export default About;
