import { ColorType } from "./colors";
import { Task } from "./task";

export interface Collection {
  id: number;
  title: string;
  color: ColorType;
  icon: string;
  tasks: Task[];
}
