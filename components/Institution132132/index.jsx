"use client";

import { useState } from "react";
import { institutions } from "@/utils/institutions";
import TitlePage from "@/layouts/TitlePage";

export default function InstitutionDropdown() {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInstitution, setOtherInstitution] = useState("");

  const handleInstitutionChange = (e) => {
    const value = e.target.value;
    setSelectedInstitution(value);

    if (value === "Others") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <div className="-mt-10 mx-5 p-5 md:mt-16 bg-white rounded-m">
      <TitlePage
        title={"Enter Name of your Institution "}
        desc={"More like your University Name"}
      />
      <div className="mt-16">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Choose Your Institution
        </label>
        <select
          value={selectedInstitution}
          onChange={handleInstitutionChange}
          className=" mt-1 block w-full pl-3 pr-10 py-5 pt-4 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="" className="">
            Select an institution
          </option>
          {institutions.map((institution) => (
            <option key={institution.id} value={institution.name}>
              {institution.name}
            </option>
          ))}
          <option value="Others">Others</option>
        </select>
      </div>

      {showOtherInput && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Your Institution
          </label>
          <input
            type="text"
            value={otherInstitution}
            onChange={(e) => setOtherInstitution(e.target.value)}
            className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            placeholder="Enter your institution"
          />
        </div>
      )}
    </div>
  );
}
