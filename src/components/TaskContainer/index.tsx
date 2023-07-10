import { StyleTaskContainer } from "./style";

export function TaskContainer() {
  return (
    <StyleTaskContainer>
      <header>
        <h1 id="created">Tarefas criadas<a>1</a></h1>
        <h1 id="concluded">Concluídas<a>1 de 2</a></h1>
      </header>
      <main>
        <img src="clipboard.svg" alt="clipboard" />
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h2>Crie tarefas e organize seus itens a fazer</h2>
      </main>
    </StyleTaskContainer>
  );
}