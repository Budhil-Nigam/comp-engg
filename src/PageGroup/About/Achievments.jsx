import { PlayCircle, Video } from "react-feather";
import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";
import { achievementInTech, videoLectures } from "../../../data/aboutData";
function Achievments() {
  return (
    <div className="mb-48 flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
      <HeroSection heading={"achievements"} image={image} />
      <div className="mx-4 mb-8 flex flex-col justify-center rounded-md bg-green-light p-6 text-lg sm:mx-8 md:mx-12 lg:mx-24">
        <span className="group flex items-center text-sm font-bold capitalize text-green-deep">
          video lectures
          <PlayCircle className="ml-1 h-4 w-4 text-green-950 transition-all group-hover:translate-x-1" />
        </span>
        <div>
          Mr. Sarfaraz Masood, Assistant Professor, Department of Computer
          Engineering has enthusiastically produced a series of video lectures
          on Compiler Design. The video lectures cover a wide range of topics
          that potentially include Lexical Analysis, Syntax Analysis, Semantic
          Analysis, Type Checking and Intermediate Code Generation. The videos
          can be accessed through the following links:
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:gap-x-12 md:px-12 lg:px-24">
        {videoLectures.map((lecture, i) => (
          <div
            className="col-span-1 flex items-center justify-center text-green-800 shadow"
            key={i}
          >
            <div className="group flex w-full items-center bg-green-light px-4 py-4 sm:px-8 md:px-12">
              <Video className="mr-2 h-4 w-4" />
              <p
                onClick={() =>
                  confirm("This link will take you to Youtube") &&
                  window.open(lecture.link)
                }
                className="relative cursor-pointer"
              >
                {lecture.title}
                <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 rounded bg-green-800 opacity-0 transition-all group-hover:w-full group-hover:opacity-100" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-8 w-[80%] bg-green-deep" />
      <div className="mt-8 grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:gap-x-12 md:px-12 lg:px-24">
        {achievementInTech.map((achievement, i) => (
          <div
            className="group relative col-span-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow"
            key={i}
          >
            <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 py-4 pl-6 text-base sm:px-8 sm:pl-8 md:px-12">
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-black">{achievement.description}</p>
            </div>
            <div className="absolute left-2 h-[80%] w-[5px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Achievments;
