import TitlePage from "../../layouts/TitlePage";

const Course = () => {
  return (
    <div className="-mt-10 mx-5 p-5 md:mt-16 bg-white rounded-md">
      <TitlePage title={"Course of Study"} desc={""} />
      <div className="mt-16">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Course of Study
        </label>
        <input
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          type="text"
          placeholder="Course of Study"
        />
      </div>
    </div>
  );
};

export default Course;
