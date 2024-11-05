import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import Python from "../assets/Python.png";
import database from "../assets/database.png";
import express from "../assets/express.svg";
import nextjs from "../assets/nextjs.svg";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 flex flex-col bg-slate-900 px-6"
    >
      <h2 className="font-bold text-3xl text-white mb-10">Skills</h2>
      <div className="grid grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-7 self-center">
        <div className="bg-slate-800 hover:shadow-orange-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-orange-500">
          <img src={html} alt="HTML" className="w-20" />
          <p className="text-white font-semibold">HTML</p>
        </div>
        <div className="bg-slate-800 hover:shadow-blue-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-blue-500">
          <img src={css} alt="CSS" className="w-20" />
          <p className="text-white font-semibold">CSS</p>
        </div>
        <div className="bg-slate-800 hover:shadow-yellow-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-yellow-500">
          <img src={javascript} alt="JS" className="w-20" />
          <p className="text-white font-semibold">JAVASCRIPT</p>
        </div>
        <div className="bg-slate-800 hover:shadow-blue-500 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-blue-400">
          <img src={reactjs} alt="REACT" className="w-20" />
          <p className="text-white font-semibold">REACTJS</p>
        </div>
        <div className="bg-slate-800 hover:shadow-green-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-green-500">
          <img src={nodejs} alt="nodejs" className="w-20" />
          <p className="text-white font-semibold">NODEJS</p>
        </div>
        <div className="bg-slate-800 hover:shadow-emerald-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-emerald-500">
          <img src={mongodb} alt="mongodb" className="w-20" />
          <p className="text-white font-semibold">MONGODB</p>
        </div>
        <div className="bg-slate-800 hover:shadow-violet-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-violet-500">
          <img src={redux} alt="redux" className="w-20" />
          <p className="text-white font-semibold">REDUX</p>
        </div>
        <div className="bg-slate-800 hover:shadow-teal-500 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-teal-400">
          <img src={tailwind} alt="tailwind" className="w-20" />
          <p className="text-white font-semibold">TAILWIND</p>
        </div>

        <div className="bg-slate-800 hover:shadow-blue-700 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-blue-800">
          <img src={Python} alt="python" className="w-20" />
          <p className="text-white font-semibold">PYTHON</p>
        </div>
        <div className="bg-slate-800 hover:shadow-slate-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-slate-500">
          <img src={database} alt="database" className="w-20" />
          <p className="text-white font-semibold">SQL</p>
        </div>
        <div className="bg-slate-800 hover:shadow-rose-600 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md shadow-rose-500">
          <img src={express} alt="express" className="w-20" />
          <p className="text-white font-semibold">EXPRESS</p>
        </div>
        <div className="bg-slate-800 flex flex-col justify-center items-center gap-3 rounded-full w-[160px] h-[160px] md:w-[180px] md:h-[180px] shadow-md hover:shadow-amber-600 shadow-amber-500 ">
          <img src={nextjs} alt="nextjs" className="w-20" />
          <p className="text-white font-semibold">NEXTJS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
