import logo from "../assets/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <Router>
      <header className="flex top-6 justify-between items-center fixed w-[90%] rounded-full z-10 border px-7 py-2 backdrop-blur-md bg-white/30">
        <HashLink smooth to="/#home">
          <img src={logo} alt="logo" className="w-10 object-contain" />
        </HashLink>
        <ul className="md:gap-5 hidden md:flex">
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="#skills">
              Skills
            </HashLink>
          </li>
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="#education">
              Education
            </HashLink>
          </li>
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="#work">
              Work
            </HashLink>
          </li>
          <li
            className={`font-semibold hover:text-white transition duration-700 `}
          >
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>

        {/* mobile navigation bar */}
        <div
          className={`absolute backdrop-blur-md bg-white/30 w-full top-16 rounded-lg border ${
            showMobileNav ? "right-[0]" : "right-[-500px]"
          } min-h-[80vh] md:hidden transition-all duration-700 py-6 px-4`}
          onClick={() => setShowMobileNav((prev) => !prev)}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <HashLink
                smooth
                to="/#home"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#skills"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#education"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                Education
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#work"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                Work
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#contact"
                className={`font-semibold backdrop-blur-lg bg-black/70 py-2 px-4 rounded-lg text-white block`}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        {showMobileNav ? (
          <RxCross2
            className="md:hidden text-4xl"
            onClick={() => setShowMobileNav((prev) => !prev)}
          />
        ) : (
          <IoMenu
            className="md:hidden text-4xl"
            onClick={() => setShowMobileNav((prev) => !prev)}
          />
        )}
      </header>
    </Router>
  );
};

export default Navbar;
