import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { TaskInput } from "./components/TaskInput";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Fazer café',
      isConcluded: true
    },
  ]);
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
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle /> 
      <Header />
      <TaskInput />
      <TaskContainer tasks={tasks} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus}/>
    </ThemeProvider>
  )
}