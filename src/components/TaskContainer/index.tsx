import { Task } from "../Task";
import { StyleTaskContainer } from "./style";

interface TaskItem {
  id: number;
  content: string;
  isConcluded: boolean;
}

interface TaskContainerProps {
  tasks: TaskItem[];
  onDeleteTask: (id: number) => void;
  onToggleTaskStatus: (id: number) => void;
}

export function TaskContainer({ tasks, onDeleteTask, onToggleTaskStatus }: TaskContainerProps) {
  return (
    <StyleTaskContainer>
      <header>
        <h1 id="created">Tarefas criadas<a>{tasks.length}</a></h1>
        <h1 id="concluded">Concluídas<a>{tasks.filter(task => task.isConcluded).length} de {tasks.length}</a></h1>
      </header>
      <main>
        {tasks.length === 0 && (
          <div>
            <img src="clipboard.svg" alt="clipboard" />
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <h2>Crie tarefas e organize seus itens a fazer</h2>
          </div>
        )}

        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isConcluded={task.isConcluded}
            onDeleteTask={onDeleteTask}
            onToggleTaskStatus={onToggleTaskStatus}
          />
        ))}
      </main>
    </StyleTaskContainer>
  );
}
