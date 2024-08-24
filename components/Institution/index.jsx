"use client";

import TitlePage from "../../layouts/TitlePage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { institutions } from "@/utils/institutions";
import { useUserFormStore } from "../../stores/useUserStore.js";
import axios from "axios";

const Institution = () => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const { userForm, addToPersonalInfo, nextStepNumber, backStepNumber } =
    useUserFormStore();

  const initialValue = {
    institution: userForm.personalInfo.institution,
    others: userForm.personalInfo.others,
    course: userForm.personalInfo.course,
    level: userForm.personalInfo.level,
    matric: userForm.personalInfo.matric,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const handleInstitutionChange = (e) => {
    const value = e.target.value;
    if (value === "Others") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  const apiKey =
    "patFc8UQhpuvdfGfD.e716793c3a499c31e6a12448e214c1b49c785487855314a792416fefe0e653cd";
  const baseId = "appJ1OADLrMNCQqE0";
  const tableName = "results";

  const onSubmit = async (data) => {
    console.log("Form data submitted in Institution step:", data);
    if (data.institution === "Others") {
      data.institution = data.others;
    }
    addToPersonalInfo(data);

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        {
          fields: {
            institution: data.institution,
            others: data.others,
            course: data.course,
            level: data.level,
            matric: data.matric,
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
    <div className="-mt-10 mx-5 p-5 md:mt-8 bg-white rounded-md">
      <TitlePage
        title={"Institution Details"}
        desc={"More like University bio"}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-8">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Choose Your Institution
        </label>
        <select
          {...register("institution", {
            required: "Institution is required",
          })}
          onChange={handleInstitutionChange}
          className="mt-1 h-16 block w-full pl-3 pr-10 py-5 pt-4 bg-white text-base border-2 border-gray-300 focus:border-black focus:outline-none sm:text-sm rounded-md"
        >
          <option value="">Select an institution</option>
          {institutions.map((institution) => (
            <option key={institution.id} value={institution.name}>
              {institution.name}
            </option>
          ))}
          <option value="Others">Others</option>
        </select>
        {errors.institution && (
          <span className="text-red-500">{errors.institution.message}</span>
        )}

        {showOtherInput && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Your Institution
            </label>
            <input
              type="text"
              {...register("others", { required: true })}
              className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your institution"
            />
            {errors.others && (
              <span className="text-red-500">* Institution is Required</span>
            )}
          </div>
        )}

        <div className="mt-16">
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Course of Study
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="text"
            placeholder="Course of Study"
            {...register("course", { required: true })}
          />
          {errors.course && (
            <span className="text-red-500">* Course is Required</span>
          )}
        </div>

        <div className="mt-16">
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Study level
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="number"
            placeholder="Study Level"
            {...register("level", { required: true })}
          />
          {errors.level && (
            <span className="text-red-500">* Level is Required</span>
          )}
        </div>

        <div className="mt-16">
          <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
            Matric. Number
          </label>
          <input
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            type="number"
            placeholder="Matric No."
            {...register("matric", { required: true })}
          />
          {errors.matric && (
            <span className="text-red-500">* Matric is Required</span>
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
            Confirm{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Institution;
