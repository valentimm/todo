import { useState } from "react";
import { StyleTaskInput } from "./style";

export function TaskInput() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        content: 'Fazer café',
        isConcluded: true
      },
      {
        id: 2,
        content: 'Estudar ReactJS',
        isConcluded: false
      },
      {
        id: 3,
        content: 'Estudar React Native',
        isConcluded: false
      },
      {
        id: 4,
        content: 'Estudar NodeJS',
        isConcluded: false
      },
    ]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: Math.random(),
      content: newTaskText,
      isConcluded: false,
    }]); 

    setNewTaskText('');
  }

  function handleTaskTextInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma tarefa')
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
        <button type="button">Criar +</button>
      </form>
    </StyleTaskInput>
  )
}