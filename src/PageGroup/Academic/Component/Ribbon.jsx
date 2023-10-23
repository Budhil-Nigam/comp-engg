import hatImage from "../assets/academic-hat.svg";
import rupee from "../assets/rupee.svg";
import clock from "../assets/clock.svg";
const Ribbon = () => {
  return (
    <div className="mt-28 flex h-1 w-full bg-green-deep">
      <div className="relative flex w-full items-center justify-evenly">
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={hatImage}
            alt="academic"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">
            Intake-20
          </h2>
        </div>
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={rupee}
            alt="money"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">
            ₹13,050 / year
          </h2>
        </div>
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={clock}
            alt="time"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-5"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">
            2 years, 4 semesters
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
