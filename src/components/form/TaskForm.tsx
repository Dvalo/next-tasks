import Button from "@components/Button";
import { ButtonVariationsEnum } from "@config/color-map";
import { useTasksContext } from "@context/TasksProvider";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type IProps = {
  collectionId: number;
  closeModal: () => void;
};

function TaskForm({ collectionId, closeModal }: IProps) {
  const { addTaskToCollection } = useTasksContext();
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  function handleSubmit() {
    const task = {
      id: Math.floor(Math.random() * 100),
      title: title || "Unnamed",
      completed: false,
      created: new Date().toString(),
      due: startDate?.toString() ?? "",
    };
    addTaskToCollection(collectionId, task);
    closeModal();
    setTitle("");
    setStartDate(new Date());
  }

  return (
    <div className="relative">
      <input
        type="text"
        id="title"
        className="focus:blue-amber-300 block w-full rounded-md border-gray-600/50 bg-white/5 p-2.5 text-sm text-white placeholder-gray-100/10 transition duration-300 focus:border focus:ring-0"
        placeholder="Task Title"
        value={title}
        onChange={(title) => setTitle(title.target.value)}
        required
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="mt-4"
        required
      />
      <div className="mt-5">
        <Button type={ButtonVariationsEnum.success} handleClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default TaskForm;
