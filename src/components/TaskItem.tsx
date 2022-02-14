import { useEffect, useState } from "react";
import { Task } from "@customTypes/task";
import { useTasksContext } from "@context/TasksProvider";

type IProps = {
  collectionId: number;
  task: Task;
  textColor: string;
  borderColor: string;
  checkedColor: string;
  block?: boolean;
};

function TaskItem({
  collectionId,
  task,
  textColor,
  borderColor,
  checkedColor,
  block = false,
}: IProps) {
  const { changeCompletion } = useTasksContext();
  const [checked, setChecked] = useState(task.completed);

  useEffect(() => {
    setChecked(task.completed);
  }, [task]);

  function handleChange() {
    setChecked((prevState) => !prevState);
    changeCompletion(collectionId, task.id);
  }

  return (
    <div
      className={`mb-5 flex items-center last:mb-0 ${
        block ? "rounded-lg bg-secondary p-5" : "bg-transparent"
      }`}
    >
      <label className="flex cursor-pointer items-center">
        <input
          type="checkbox"
          className={`h-6 w-6 cursor-pointer ${textColor} border-2 bg-transparent ${borderColor} rounded-md bg-transparent 
              duration-300 ease-out hover:bg-slate-50/10 focus:shadow-transparent focus:outline-0 focus:ring-transparent 
              focus:ring-offset-transparent checked:${checkedColor}`}
          checked={checked}
          onChange={handleChange}
        />
        <span className="ml-4 text-base font-bold">{task.title}</span>
      </label>
    </div>
  );
}

export default TaskItem;
