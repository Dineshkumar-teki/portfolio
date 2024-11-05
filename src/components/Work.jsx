import rentalvault from "../assets/rentalvault.png";
import promptVault from "../assets/promptVault.png";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import blogApp from "../assets/blogApp.png";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col gap-3 bg-slate-900 pt-24 pb-10 text-white px-10"
    >
      <h3 className="text-2xl font-semibold text-slate-300">My Work</h3>
      <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-blue-500 to-teal-500 inline pb-1 self-start text-transparent bg-clip-text">
        Projects
      </h1>
      <p className="w-full md:w-[60%] mb-5 text-slate-400">
        This portfolio highlights my skills through real-world projects,
        featuring descriptions, code repository links, and live demos that
        demonstrate my problem-solving abilities and tech expertise.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={rentalvault}
              alt="rentalVault"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex gap-2 justify-end m-3">
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/Dineshkumar-teki/rentalVault",
                    "_blank"
                  )
                }
              >
                <FaGithub />
              </div>
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open("https://rental-vault.vercel.app/", "_blank")
                }
              >
                <FaExternalLinkSquareAlt />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">RentalVault</h3>
            <p className="mt-2 text-secondary text-[14px]">
              RentalVault is a property management platform designed to
              streamline the rental search experience with advanced filtering
              and fast-loading interfaces.
            </p>
            <p className="text-sm flex gap-1.5">
              <span className="text-orange-500">#NextJS</span>
              <span className="text-teal-500">#ServerSideRendering</span>
              <span className="text-indigo-500">#TailwindCSS</span>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={promptVault}
              alt="promptVault"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex gap-2 justify-end m-3">
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/Dineshkumar-teki/promptVaultApp",
                    "_blank"
                  )
                }
              >
                <FaGithub />
              </div>
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open("https://prompt-vault-app.vercel.app/", "_blank")
                }
              >
                <FaExternalLinkSquareAlt />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">PromptVault</h3>
            <p className="mt-2 text-secondary text-[14px]">
              PromptVault is a CRUD platform for creating, updating, and
              managing prompts with a mobile-friendly interface and secure data
              handling.
            </p>
            <p className="text-sm flex gap-1.5">
              <span className="text-purple-500">#NextJS</span>
              <span className="text-pink-500">#ServerSideRendering</span>
              <span className="text-blue-500">#CRUD</span>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={blogApp}
              alt="InkWave"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex gap-2 justify-end m-3">
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/Dineshkumar-teki/dinesh-blog-project",
                    "_blank"
                  )
                }
              >
                <FaGithub />
              </div>
              <div
                className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://dinesh-blog-project.onrender.com",
                    "_blank"
                  )
                }
              >
                <FaExternalLinkSquareAlt />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              InkWave - <span className="text-lg">Where Creativity Flows</span>
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              InkWave is a vibrant blogging platform where the admin curates
              posts, fostering creativity and connection among readers.
            </p>
            <p className="text-sm flex gap-1.5">
              <span className="text-purple-500">#React</span>
              <span className="text-pink-500">#Node.js</span>
              <span className="text-blue-500">#Vite</span>
              <span className="text-orange-500">#Mongodb</span>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
