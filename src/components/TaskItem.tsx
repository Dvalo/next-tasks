import { useState } from "react";
import { Task } from "@customTypes/task";

type IProps = {
  task: Task;
  borderColor: string;
  checkedColor: string;
};

function TaskItem({ task, borderColor, checkedColor }: IProps) {
  const [checked, setChecked] = useState(task.completed);

  function handleChange() {
    setChecked((prevState) => !prevState);
  }

  return (
    <div className="flex items-center mb-5 last:mb-0">
      <label className="cursor-pointer flex items-center">
        <input
          type="checkbox"
          className={`cursor-pointer h-6 w-6 text-emerald-500 bg-transparent border-2 ${borderColor} rounded-md ease-out duration-300 bg-transparent hover:bg-slate-50/10 focus:outline-0 
          focus:ring-offset-transparent focus:ring-transparent focus:shadow-transparent checked:${checkedColor}`}
          checked={checked}
          onChange={handleChange}
        />
        <span className="font-bold text-base ml-4">{task.title}</span>
      </label>
    </div>
  );
}

export default TaskItem;
