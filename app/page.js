"use client";

import Step from "../components/Step";
import YourInfo from "../components/YourInfo";
import Telephone from "../components/Institution";
import Contact from "@/components/Contact";
import Final from "../components/Final";

import BaseLayout from "../layouts/BaseLayout";
import { useUserFormStore } from "@/stores/useUserStore";

export default function Home() {
  const { stepNumber } = useUserFormStore();

  return (
    <BaseLayout title={"Nelfund Form "}>
      <div className="mx-auto md:max-w-5xl md:flex md:bg-white md:shadow-md md:rounded-xl">
        <div id="sidebar-left">
          <Step />
        </div>
        <div id="content" className=" md:w-3/4">
          {stepNumber === 0 && <YourInfo />}
          {stepNumber === 1 && <Contact />}
          {stepNumber === 2 && <Telephone />}
          {stepNumber === 3 && <Final />}

          {/* {stepNumber === 3 && <Email />}
          {stepNumber === 4 && <Institution />}
          {stepNumber === 5 && <Course />}
          {stepNumber === 6 && <StudyLevel />}
          {stepNumber === 7 && <Matric />}
          {stepNumber === 8 && <Final />} */}
        </div>
      </div>
    </BaseLayout>
  );
}
