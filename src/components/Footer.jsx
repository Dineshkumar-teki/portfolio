import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Dineshkumar Teki. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:dineshkumarteki497@gmail.com"
            target="_blank"
            className="w-8 h-8 border flex justify-center items-center rounded-full hover:-translate-y-1 transition duration-700"
          >
            <MdOutlineEmail className="text-xl" />
          </a>
          <a
            href="https://github.com/Dineshkumar-teki"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border flex justify-center items-center rounded-full hover:-translate-y-1 transition duration-700"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/dineshkumar-teki"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border flex justify-center items-center rounded-full hover:-translate-y-1 transition duration-700"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
