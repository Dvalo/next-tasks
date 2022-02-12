import React from "react";
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeIcon,
} from "@heroicons/react/solid";

const collectionIcons: { [key: string]: React.ComponentType } = {
  house: HomeIcon,
  education: AcademicCapIcon,
  work: BriefcaseIcon,
  travel: GlobeIcon,
};

export { collectionIcons };
