enum ColorsEnum {
  red = "red",
  orange = "orange",
  amber = "amber",
  lime = "lime",
  green = "green",
  emerald = "emerald",
  cyan = "cyan",
  blue = "blue",
  violet = "violet",
  indigo = "indigo",
  purple = "purple",
  pink = "pink",
}

enum ButtonVariationsEnum {
  success = "success",
  error = "error",
  info = "info",
}

interface IButtonVariation {
  bg: string;
  hover: string;
}

const buttonVariations: { [key: string]: IButtonVariation } = {
  success: { bg: "bg-green-600", hover: "hover:bg-green-700" },
  error: { bg: "bg-red-600", hover: "hover:bg-red-700" },
  info: { bg: "bg-sky-600", hover: "hover:bg-sky-700" },
};

const collectionBgColors: { [key: string]: string } = {
  red: "bg-red-400",
  orange: "bg-orange-400",
  amber: "bg-amber-400",
  lime: "bg-lime-400",
  green: "bg-green-400",
  emerald: "bg-emerald-400",
  cyan: "bg-cyan-400",
  blue: "bg-blue-400",
  violet: "bg-violet-400",
  indigo: "bg-indigo-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  default: "bg-red-400",
};

const collectionBorderColors: { [key: string]: string } = {
  red: "border-red-400",
  orange: "border-orange-400",
  amber: "border-amber-400",
  lime: "border-lime-400",
  green: "border-green-400",
  emerald: "border-emerald-400",
  cyan: "border-cyan-400",
  blue: "border-blue-400",
  violet: "border-violet-400",
  indigo: "border-indigo-400",
  purple: "border-purple-400",
  pink: "border-pink-400",
  default: "border-red-400",
};

const collectionTextColors: { [key: string]: string } = {
  red: "text-red-400",
  orange: "text-orange-400",
  amber: "text-amber-400",
  lime: "text-lime-400",
  green: "text-green-400",
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  indigo: "text-indigo-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
  default: "text-red-400",
};

const collectionColorsSelect = [
  {
    value: ColorsEnum.red,
    label: <div className="h-6 w-6 bg-red-400" />,
  },
  {
    value: ColorsEnum.orange,
    label: <div className="h-6 w-6 bg-orange-400" />,
  },
  {
    value: ColorsEnum.amber,
    label: <div className="h-6 w-6 bg-amber-400" />,
  },
  {
    value: ColorsEnum.lime,
    label: <div className="h-6 w-6 bg-lime-400" />,
  },
  {
    value: ColorsEnum.green,
    label: <div className="h-6 w-6 bg-green-400" />,
  },
  {
    value: ColorsEnum.emerald,
    label: <div className="h-6 w-6 bg-emerald-400" />,
  },
  {
    value: ColorsEnum.cyan,
    label: <div className="h-6 w-6 bg-cyan-400" />,
  },
  {
    value: ColorsEnum.blue,
    label: <div className="h-6 w-6 bg-blue-400" />,
  },
  {
    value: ColorsEnum.violet,
    label: <div className="h-6 w-6 bg-violet-400" />,
  },
  {
    value: ColorsEnum.indigo,
    label: <div className="h-6 w-6 bg-indigo-400" />,
  },
  {
    value: ColorsEnum.purple,
    label: <div className="h-6 w-6 bg-purple-400" />,
  },
  {
    value: ColorsEnum.pink,
    label: <div className="h-6 w-6 bg-pink-400" />,
  },
];

export {
  buttonVariations,
  collectionBgColors,
  collectionBorderColors,
  collectionTextColors,
  collectionColorsSelect,
  ColorsEnum,
  ButtonVariationsEnum,
};
