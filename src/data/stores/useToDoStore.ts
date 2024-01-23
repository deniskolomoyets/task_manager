import create from "zustand";

//discrabe types
interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [
    {
      id: "abc",
      title: "ttt",
      createdAt: 111,
    },
  ],
  //Methods
  createTask: (title) => {
    const { tasks } = get();
    const newTask = {};
  },
  updateTask: (id, title) => {},
  removeTask: (id) => {},
}));
