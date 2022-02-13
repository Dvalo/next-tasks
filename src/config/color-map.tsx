enum ColorsEnum {
  pink = "pink",
  purple = "purple",
  green = "green",
  indigo = "indigo",
}

const collectionBgColors: { [key: string]: string } = {
  pink: "bg-pink-400",
  purple: "bg-purple-400",
  green: "bg-green-400",
  indigo: "bg-indigo-400",
  default: "bg-red-400",
};

const collectionBorderColors: { [key: string]: string } = {
  pink: "border-pink-400",
  purple: "border-purple-400",
  green: "border-green-400",
  indigo: "border-indigo-400",
  default: "border-red-400",
};

const collectionColorsSelect = [
  {
    value: ColorsEnum.pink,
    label: <div className="w-6 h-6 bg-pink-400" />,
  },
  {
    value: ColorsEnum.purple,
    label: <div className="w-6 h-6 bg-purple-400" />,
  },
  {
    value: ColorsEnum.green,
    label: <div className="w-6 h-6 bg-green-400" />,
  },
  {
    value: ColorsEnum.indigo,
    label: <div className="w-6 h-6 bg-indigo-400" />,
  },
];

export {
  collectionBgColors,
  collectionBorderColors,
  collectionColorsSelect,
  ColorsEnum,
};
