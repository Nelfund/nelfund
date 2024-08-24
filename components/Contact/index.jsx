import { useUserFormStore } from "../../stores/useUserStore.js";
import { useForm } from "react-hook-form";
import TitlePage from "../../layouts/TitlePage";
import axios from "axios";

const Contact = () => {
  const { userForm, addToPersonalInfo, nextStepNumber, backStepNumber } =
    useUserFormStore();
  const initialValue = {
    email: userForm.personalInfo.email,
    number: userForm.personalInfo.number,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const apiKey =
    "patFc8UQhpuvdfGfD.e716793c3a499c31e6a12448e214c1b49c785487855314a792416fefe0e653cd";
  const baseId = "appJ1OADLrMNCQqE0";
  const tableName = "results";

  const onSubmit = async (data) => {
    console.log("Form data submitted:", data);
    addToPersonalInfo(data);

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        {
          fields: {
            email: data.email,
            number: data.number,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent to Airtable:", response.data);
      nextStepNumber();
    } catch (error) {
      console.error("Error sending data to Airtable:", error);
    }
  };

  return (
    <div className="-mt-10 mx-5 p-5 md:p-0 md:mt-20 bg-white rounded-md">
      <TitlePage
        title={" Enter Your Email and Phone Number "}
        desc={"so we can send you updates`"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-8">
        <div>
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Email
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-rose-500 text-xs font-semibold">
              * Email is required
            </span>
          )}
        </div>

        <div className="mt-10">
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Phone Number
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="number"
            placeholder="Phone no."
            {...register("number", { required: true, maxLength: 80 })}
          />
          {errors.phone_number && (
            <span className="text-rose-500 text-xs font-semibold">
              * phone number is required
            </span>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={backStepNumber}
            className="font-bold hover:text-slate-500"
          >
            Go back
          </button>

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

export default Contact;
