import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { TaskInput } from "./components/TaskInput";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

interface Task {
  id: number;
  content: string;
  isConcluded: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function toggleTaskStatus(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isConcluded: !task.isConcluded,
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  function addTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle /> 
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskContainer tasks={tasks} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus} />
    </ThemeProvider>
  )
}

