import { ColorsEnum } from "@config/color-map";
import { IconsEnum } from "@config/icon-map";

export interface ISelect {
  value: IconsEnum | ColorsEnum;
  label: JSX.Element;
}
