import { Navbar } from "../components";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";
import { FaGithub, FaFacebook, FaLinkedinIn, FaDiscord } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center bg-slate-900 min-h-screen"
    >
      <Navbar />
      <section className="flex flex-col lg:flex-row justify-center gap-4 items-center px-10 py-24 lg:py-0">
        <div className="text-white order-2 lg:order-1 w-full lg:w-[45%] flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Hi, Myself</h3>
          <h1 className="text-5xl font-bold">Dineshkumar Teki</h1>
          <h3 className="text-2xl font-semibold">
            And I'm a{" "}
            <span className="text-orange-400 text-3xl ">
              <ReactTyped
                strings={[
                  "Full Stack Web Developer",
                  "React Developer",
                  "Next.js Developer",
                ]}
                backSpeed={50}
                typeSpeed={100}
                backDelay={10}
                loop="true"
              />
            </span>
          </h3>
          <p className="">
            I’m passionate about turning ideas into functional web applications
            that resonate with users. With a blend of design and development
            skills, I aim to create solutions that are both visually appealing
            and user-friendly. I embrace challenges as opportunities for growth,
            continuously exploring new technologies in my journey as a
            developer.
          </p>
          <div className="flex gap-4 mb-5 mt-2.5">
            <a
              href="https://github.com/Dineshkumar-teki"
              target="_blank"
              className="w-8 h-8 bg-black flex justify-center items-center rounded-full shadow-md shadow-teal-500 hover:shadow-orange-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dineshkumar-teki"
              target="_blank"
              className="w-8 h-8 bg-black flex justify-center items-center rounded-full shadow-md shadow-teal-500 hover:shadow-orange-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-8 h-8 bg-black flex justify-center items-center rounded-full shadow-md shadow-teal-500 hover:shadow-orange-500"
            >
              <FaDiscord />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-8 h-8 bg-black flex justify-center items-center rounded-full shadow-md shadow-teal-500 hover:shadow-orange-500"
            >
              <FaFacebook />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/17klOTEGjWlQO8CSRBR5gmd15wE_M0xpS/view?usp=drive_link"
            target="_blank"
          >
            <button className="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-orange-500 transition duration-700 px-5 py-2 rounded-full font-semibold w-full">
              Download Resume
            </button>
          </a>
        </div>
        <div className="w-[300px] my-10 lg:my-0 order-1 lg:order-2 lg:w-[45%] h-[50%] object-scale-down flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="rounded-2xl shadow-lg shadow-orange-500 hover:shadow-blue-500 rotate-6 hover:rotate-0 transition duration-700"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
