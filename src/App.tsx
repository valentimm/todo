import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import { TaskInput } from "./components/TaskInput";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle /> 
      <Header />
      <TaskInput />
      <TaskContainer />
    </ThemeProvider>
  )
}