import { useEffect, useState } from "react";
import TaskTimeDisplay from "@components/task/TaskTimeDisplay";
import { Task } from "@customTypes/task";
import { useTasksContext } from "@context/TasksProvider";
import { format, intervalToDuration, isBefore, isValid } from "date-fns";

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
  const [timeLeft, setTimeLeft] = useState(getCountdown(task.due));

  useEffect(() => {
    setChecked(task.completed);
  }, [task]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getCountdown(task.due));
    }, 1000);

    return () => clearTimeout(timer);
  });

  function handleChange() {
    setChecked((prevState) => !prevState);
    changeCompletion(collectionId, task.id);
  }

  function getIsBefore(date: string) {
    return isBefore(new Date(date), new Date());
  }

  function getInterval(date: string) {
    if (isValid(new Date(date)) && !getIsBefore(date)) {
      return intervalToDuration({
        start: new Date(),
        end: new Date(date),
      });
    }
    return null;
  }

  function getCountdown(date: string) {
    const interval = getInterval(date);
    if (interval && interval.days! < 2) {
      return {
        hours: interval.hours,
        minutes: interval.minutes,
        seconds: interval.seconds,
      };
    }
  }

  return (
    <div
      className={`mb-5 flex flex-col last:mb-0 ${
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
      {timeLeft && !task.completed && (
        <TaskTimeDisplay color="text-white/30">
          <span
            className={`ml-2 text-sm ${
              timeLeft.hours === 0 && timeLeft.minutes! <= 30
                ? "text-red-400"
                : "text-gray-100"
            }`}
          >
            <span>{timeLeft?.hours} hours</span>
            <span className="ml-2">{timeLeft?.minutes} minutes</span>
            <span className="ml-2">{timeLeft?.seconds} seconds</span>
          </span>
        </TaskTimeDisplay>
      )}
      {task.due && getIsBefore(task.due) && !task.completed && (
        <TaskTimeDisplay color="text-red-400">
          <span className="ml-2 text-sm text-red-400">Overdue</span>
        </TaskTimeDisplay>
      )}
      {task.due && getInterval(task.due)?.days! > 2 && !task.completed && (
        <TaskTimeDisplay color="text-white/30">
          <span className="ml-2 text-sm">
            {format(new Date(task.due), "EEEE, Lo LLL, y - HH:mm:ss a")}
          </span>
        </TaskTimeDisplay>
      )}
    </div>
  );
}

export default TaskItem;
