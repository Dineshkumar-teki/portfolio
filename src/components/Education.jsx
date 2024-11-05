import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import school from "../assets/school.png";
import college from "../assets/college.png";
import university from "../assets/university.png";
import nxtwave from "../assets/nxtwave.png";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-800 flex flex-col justify-center items-center gap-5 px-5 pt-24"
    >
      <h1 className="text-white font-semibold text-3xl self-start">
        Education
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="2024 - present"
          iconStyle={{ background: "rgb(240, 201, 35)", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={nxtwave}
                alt="nxtwave"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">NXTWAVE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            MERN Full Stack
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="2019 - 2023"
          iconStyle={{ background: "#00BCD4", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={university}
                alt="university"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">GMRIT</h3>
          <h4 className="vertical-timeline-element-subtitle">
            B-TECH (MECHANICAL ENGINEERING)
          </h4>
          <p>
            <span>CGPA:</span> 7.94
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="2017 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={college}
                alt="college"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            Sri Chaitanya Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MPC</h4>
          <p>
            <span>CGPA:</span> 9.94
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="2016 - 2017"
          iconStyle={{ background: "#00BCD4", color: "#000" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={school}
                alt="school"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            T P MPL High School
          </h3>
          <p>
            <span>CGPA:</span> 9.2
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
