"use client";

import Step from "../components/Step";
import YourInfo from "../components/YourInfo";
import Location from "../components/Location";
import Telephone from "../components/Telephone";
import Institution from "../components/Institution";
import Email from "@/components/Email";
import Final from "../components/Final";
import FooterNav from "../components/FooterNav";
import BaseLayout from "../layouts/BaseLayout";
import { useUserFormStore } from "@/stores/useUserStore";
import StudyLevel from "@/components/Studylevel";
import Course from "@/components/Course";
import Matric from "../components/Matric";

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
          {stepNumber === 1 && <Location />}
          {stepNumber === 2 && <Telephone />}
          {stepNumber === 3 && <Email />}
          {stepNumber === 4 && <Institution />}
          {stepNumber === 5 && <Course />}
          {stepNumber === 6 && <StudyLevel />}
          {stepNumber === 7 && <Matric />}
          {stepNumber === 8 && <Final />}

          <FooterNav />
        </div>
      </div>
    </BaseLayout>
  );
}
