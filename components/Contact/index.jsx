import TitlePage from "../../layouts/TitlePage.jsx";
import { useUserFormStore } from "../../stores/useUserStore.js";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { userForm, addToPersonalInfo, nextStepNumber } = useUserFormStore();
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

  const onSubmit = async (data) => {
    addToPersonalInfo(data);
    try {
      await axios.post(
        "https://api.airtable.com/v0/appJ1OADLrMNCQqE0/Table%201",
        {
          fields: {
            Email: data.email,
            Number: data.number,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      nextStepNumber();
    } catch (error) {
      console.error("Error sending data to Airtable:", error);
    }
  };
  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="-mt-10 mx-5 p-5 md:mt-16 bg-white rounded-md"
    >
      <TitlePage
        title={"Email Address and Phone Number"}
        desc={" so we can send you updates"}
      />
      <div className="mt-16">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Email Address
        </label>
        <input
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          type="address"
          placeholder="email address"
          {...register("email", { required: "email is required" })}
        />
        {errors.email && (
          <span className="text-rose-500 text-xs font-semibold">
            * Email is required
          </span>
        )}
      </div>

      <div className="mt-16">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Phone Number
        </label>
        <input
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          type="number"
          placeholder="Mobile number"
          {...register("number", { required: true, maxLength: 80 })}
        />
        {errors.number && (
          <span className="text-rose-500 text-xs font-semibold">
            * Phone Number is required
          </span>
        )}
      </div>
    </div>
  );
};

export default Contact;
