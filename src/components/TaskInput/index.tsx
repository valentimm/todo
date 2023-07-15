import React, { useState } from "react";
import { StyleTaskInput } from "./style";

interface TaskInputProps {
  onAddTask: (newTask: { id: number; content: string; isConcluded: boolean }) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      content: newTaskText,
      isConcluded: false,
    };

    onAddTask(newTask);
    setNewTaskText('');
  }

  function handleTaskTextInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma tarefa');
  }

  function handleTaskTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <StyleTaskInput>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={newTaskText}
          onChange={handleTaskTextChange}
          onInvalid={handleTaskTextInvalid}
          required
        />
        <button type="submit">Criar +</button>
      </form>
    </StyleTaskInput>
  )
}
