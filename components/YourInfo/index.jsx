import { useUserFormStore } from "../../stores/useUserStore.js";
import { useForm } from "react-hook-form";
import TitlePage from "../../layouts/TitlePage";
import axios from "axios";
import { states } from "@/utils/states.js";
import Image from "next/image";
import nelfund from "@/public/assets/nelfund.png";

const YourInfo = () => {
  const { userForm, addToPersonalInfo, nextStepNumber } = useUserFormStore();
  const initialValue = {
    name: userForm.personalInfo.name,
    location: userForm.personalInfo.location,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  // const apiKey =
  //   "patFc8UQhpuvdfGfD.e716793c3a499c31e6a12448e214c1b49c785487855314a792416fefe0e653cd";
  // const baseId = "appJ1OADLrMNCQqE0";
  // const tableName = "results";

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    addToPersonalInfo(data);

    // try {
    //   const response = await axios.post(
    //     `https://api.airtable.com/v0/${baseId}/${tableName}`,
    //     {
    //       fields: {
    //         name: data.name,
    //         location: data.location,
    //       },
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${apiKey}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("Data sent to Airtable:", response.data);
    nextStepNumber();
    // } catch (error) {
    //   console.error("Error sending data to Airtable:", error);
    // }
  };

  return (
    <div className="-mt-10 mx-5 p-5 md:p-0 md:mt-20 bg-white rounded-md">
      <div className=" pb-5">
        <Image src={nelfund} alt="" width={120} height={120} />
      </div>
      <TitlePage
        title={"Let's Start With Your Name and Location "}
        desc={"Please provide your name and select your location."}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-8">
        <div>
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Full Name
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-green-600 rounded-md focus:outline-none focus:border-green-800"
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

        <div className="mt-10">
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            State Of Origin
          </label>
          <select
            className="block w-full px-4 py-4 h-16 mt-2 text-base placeholder-gray-400 bg-white border border-green-600 rounded-md focus:outline-none focus:border-green-800"
            {...register("location", { required: true })}
          >
            <option value="" disabled selected>
              Select Your State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.location && (
            <span className="text-rose-500 text-xs font-semibold">
              * State Of Origin is required
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <button
            className="pointer bg-green-800 rounded text-white font-bold p-2 hover:bg-green-600 hover:text-white"
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
