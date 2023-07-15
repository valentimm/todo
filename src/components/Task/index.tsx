import { StyleTask } from "./style";

interface TaskProps {
  id: number;
  content: string;
  isConcluded: boolean;
  onDeleteTask: (id: number) => void;
  onToggleTaskStatus: (id: number) => void;
}

export function Task({ id, content, isConcluded, onDeleteTask, onToggleTaskStatus }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function toggleTaskStatus() {
    onToggleTaskStatus(id);
  }

  return (
    <StyleTask>
      <input type="checkbox" checked={isConcluded} onChange={toggleTaskStatus} />
      <p aria-checked={isConcluded}>{content}</p>
      <button type="button" onClick={handleDeleteTask}>
        <img src="trash.svg" alt="Delete task" />
      </button>
    </StyleTask>
  )
}
