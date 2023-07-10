import { StyleTaskInput } from "./style"

export function TaskInput() {
  return (
    <StyleTaskInput>
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">Criar +</button>
      </div>
    </StyleTaskInput>
  )
}