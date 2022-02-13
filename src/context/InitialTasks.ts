const initialTasks = [
  {
    id: 1,
    title: "House Chores",
    color: "pink",
    icon: "house",
    tasks: [
      {
        id: 1,
        title: "Do dishes",
        completed: false,
        created: "",
        due: "",
      },
      {
        id: 2,
        title: "Clean up table",
        completed: false,
        created: "",
        due: "",
      },
    ],
  },
  {
    id: 2,
    title: "University",
    color: "green",
    icon: "education",
    tasks: [
      {
        id: 1,
        title: "Study something from some book",
        completed: true,
        created: "",
        due: "",
      },
      {
        id: 2,
        title: "Write essay for the class",
        completed: false,
        created: "",
        due: "",
      },
    ],
  },
  {
    id: 3,
    title: "Work",
    color: "indigo",
    icon: "work",
    tasks: [
      {
        id: 1,
        title: "Finish up front-end application",
        completed: true,
        created: "",
        due: "",
      },
      {
        id: 2,
        title: "Fix bugs and optimize code",
        completed: false,
        created: "",
        due: "",
      },
    ],
  },
];

export { initialTasks };
