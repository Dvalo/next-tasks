import React from "react";
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { ISelect } from "@customTypes/select";

enum IconsEnum {
  house = "house",
  education = "education",
  work = "work",
  travel = "travel",
}

const collectionIcons: { [key: string]: React.ComponentType } = {
  [IconsEnum.house]: HomeIcon,
  [IconsEnum.education]: AcademicCapIcon,
  [IconsEnum.work]: BriefcaseIcon,
  [IconsEnum.travel]: GlobeIcon,
};

const collectionIconsSelect: Array<ISelect> = [
  {
    value: IconsEnum.house,
    label: <HomeIcon className="w-6 h-6" />,
  },
  {
    value: IconsEnum.education,
    label: <AcademicCapIcon className="w-6 h-6" />,
  },
  {
    value: IconsEnum.travel,
    label: <GlobeIcon className="w-6 h-6" />,
  },
  {
    value: IconsEnum.work,
    label: <BriefcaseIcon className="w-6 h-6" />,
  },
];

export { collectionIcons, collectionIconsSelect, IconsEnum };
