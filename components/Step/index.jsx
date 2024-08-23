import { useUserFormStore } from "../../stores/useUserStore";

const Step = () => {
  const { stepNumber } = useUserFormStore();

  return (
    <>
      <div className="h-40 bg-image flex md:flex-col  md:p-8 md:m-5 items-center justify-center md:justify-start md:items-start">
        <div className="md:flex md:m-4 items-center pr-10 lg:pr-0 md:pr-0">
          <div
            className={`flex h-10 w-10 items-center  justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 0 && "bg-green-500 text-black"
            }`}
          >
            1
          </div>
          <div className="md:ml-4 text-xs">
            <h2 className="  text-white capitalize">Your Info</h2>
            <p className=" hidden md:block font-semibold text-white ">
              Name & Location
            </p>
          </div>
        </div>
        <div className="md:flex md:m-4 items-center  pr-10 lg:pr-0 md:pr-0">
          <div
            className={`flex h-10 w-10  items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 1 && "bg-green-500 text-black"
            }`}
          >
            2
          </div>
          <div className="md:ml-4 text-xs">
            <h2 className=" text-white capitalize">Contact</h2>
            <p className=" hidden md:block text-xs font-semibold text-white ">
              Email & Phone Number
            </p>
          </div>
        </div>
        <div className="md:flex md:m-4 items-center">
          <div
            className={`flex h-10 w-10  items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 2 && "bg-green-500 text-black"
            }`}
          >
            3
          </div>
          <div className="md:ml-4 text-xs">
            <h2 className=" text-white capitalize">Institution Details</h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Institution Details
            </p>
          </div>
        </div>
        {/* <div className="flex md:m-4 items-center">
          <div
            className={`flex md:h-10 md:w-10 w-5 h-5 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 3 && "bg-green-500 text-black"
            }`}
          >
            4
          </div>
          <div className="ml-4 text-xs">
            <h2 className="hidden md:block text-white capitalize">Email</h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Address
            </p>
          </div>
        </div>
        <div className="flex md:m-4 items-center">
          <div
            className={`flex md:h-10 md:w-10 w-5 h-5 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 4 && "bg-green-500 text-black"
            }`}
          >
            5
          </div>
          <div className="ml-4 text-xs">
            <h2 className="hidden md:block text-white capitalize">
              Institution
            </h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Institution
            </p>
          </div>
        </div>
        <div className="flex md:m-4 items-center">
          <div
            className={`flex md:h-10 md:w-10 w-5 h-5 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 5 && "bg-green-500 text-black"
            }`}
          >
            6
          </div>
          <div className="ml-4 text-xs">
            <h2 className="hidden md:block text-white capitalize">Course</h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Course of Study
            </p>
          </div>
        </div>
        <div className="flex md:m-4 items-center">
          <div
            className={`flex md:h-10 md:w-10 w-5 h-5 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 6 && "bg-green-500 text-black"
            }`}
          >
            7
          </div>
          <div className="ml-4 text-xs">
            <h2 className="hidden md:block text-white capitalize">
              Study Level
            </h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Level
            </p>
          </div>
        </div>

        <div className="flex md:m-4 items-center">
          <div
            className={`flex md:h-10 md:w-10 w-5 h-5 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 7 && "bg-green-500 text-black"
            }`}
          >
            8
          </div>
          <div className="ml-4 text-xs">
            <h2 className="hidden md:block text-white capitalize">
              Matriculation Number
            </h2>
            <p className="hidden md:block text-xs font-semibold text-white ">
              Matric. no
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Step;
