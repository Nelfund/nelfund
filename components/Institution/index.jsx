"use client";

import TitlePage from "../../layouts/TitlePage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { institutions } from "@/utils/institutions";
import { useUserFormStore } from "../../stores/useUserStore.js";
import axios from "axios";

const Institution = () => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const { userForm, addToPersonalInfo, nextStepNumber } = useUserFormStore();

  const initialValue = {
    institution: userForm.personalInfo.institution,
    otherInstitution: userForm.personalInfo.otherInstitution,
    course: userForm.personalInfo.course,
    level: userForm.personalInfo.level,
    matric: userForm.personalInfo.matric,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const selectedInstitution = watch("institution");

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

  const onSubmit = async (data) => {
    if (data.institution === "Others") {
      data.institution = data.otherInstitution;
    }
    addToPersonalInfo(data);
    try {
      await axios.post(
        "https://api.airtable.com/v0/appJ1OADLrMNCQqE0/Table%201",
        {
          fields: {
            Institution: data.institution,
            Course: data.course,
            Level: data.level,
            Matric: data.matric,
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
          className="mt-1 block w-full pl-3 pr-10 py-5 pt-4 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
              {...register("otherInstitution", { required: true })}
              className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your institution"
            />
            {errors.otherInstitution && (
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
      </form>
    </div>
  );
};

export default Institution;
