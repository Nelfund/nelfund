import { useUserFormStore } from "../../stores/useUserStore.js";
import { useForm } from "react-hook-form";
import TitlePage from "../../layouts/TitlePage";

const YourInfo = () => {
  const { userForm, addToPersonalInfo, nextStepNumber } = useUserFormStore();
  const initialValue = {
    name: userForm.personalInfo.name,
    email: userForm.personalInfo.email,
    phone_number: userForm.personalInfo.phone_number,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });
  const onSubmit = (data) => {
    addToPersonalInfo(data);
    nextStepNumber();
  };

  return (
    <div className="-mt-10 mx-5 p-5 md:p-0 md:mt-20 bg-white rounded-md">
      <TitlePage
        title={"Let's start with your name "}
        desc={"Please provide your name.`"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-8">
        <div>
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Full Name
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="text"
            placeholder="Adesanya Grace"
            {...register("name", { required: true, maxLength: 80 })}
          />
          {errors.name && (
            <span className="text-rose-500 text-xs font-semibold">
              * Name is required
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <button
            className=" pointer bg-slate-900 rounded text-white font-bold p-2 hover:bg-[#483EFF] hover:text-white"
            type="submit"
          >
            Next step{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
