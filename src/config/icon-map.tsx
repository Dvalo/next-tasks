import React from "react";
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ArchiveIcon,
  CreditCardIcon,
  FilmIcon,
  InboxIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { GlobeIcon } from "@heroicons/react/outline";

import { ISelect } from "@customTypes/select";

enum IconsEnum {
  house = "house",
  education = "education",
  work = "work",
  travel = "travel",
  archive = "archive",
  creditCard = "credit-card",
  film = "film",
  inbox = "inbox",
  mail = "mail",
  map = "map",
  phone = "phone",
  trash = "trash",
}

const collectionIcons: { [key: string]: React.ComponentType } = {
  [IconsEnum.house]: HomeIcon,
  [IconsEnum.education]: AcademicCapIcon,
  [IconsEnum.work]: BriefcaseIcon,
  [IconsEnum.travel]: GlobeIcon,
  [IconsEnum.archive]: ArchiveIcon,
  [IconsEnum.creditCard]: CreditCardIcon,
  [IconsEnum.film]: FilmIcon,
  [IconsEnum.inbox]: InboxIcon,
  [IconsEnum.mail]: MailIcon,
  [IconsEnum.map]: MapIcon,
  [IconsEnum.phone]: PhoneIcon,
  [IconsEnum.trash]: TrashIcon,
};

const collectionIconsSelect: Array<ISelect> = [
  {
    value: IconsEnum.house,
    label: <HomeIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.education,
    label: <AcademicCapIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.work,
    label: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.travel,
    label: <GlobeIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.archive,
    label: <ArchiveIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.creditCard,
    label: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.film,
    label: <FilmIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.inbox,
    label: <InboxIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.mail,
    label: <MailIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.map,
    label: <MapIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.phone,
    label: <PhoneIcon className="h-6 w-6" />,
  },
  {
    value: IconsEnum.trash,
    label: <TrashIcon className="h-6 w-6" />,
  },
];

export { collectionIcons, collectionIconsSelect, IconsEnum };
