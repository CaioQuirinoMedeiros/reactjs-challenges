import styles from './App.module.css'
import { Header } from './componentes/Header'
import { TextBadge } from './componentes/TextBadge'
import { TodoItem } from './componentes/TodoItem'
import { useTodosContext } from './contexts/TodoContext'
import { ListChecks } from 'phosphor-react'

export function App() {
  const { todos, removeTodo, toggleTodoDone } = useTodosContext()

  const todosDone = todos.filter((todo) => {
    return todo.isDone
  })

  const todosNotDone = todos.filter((todo) => {
    return !todo.isDone
  })

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.todosHeader}>
          <div>
            <span>Tarefas criadas</span>
            <TextBadge text={todos.length.toString()} />
          </div>
          <div>
            <span>Concluídas</span>
            <TextBadge text={`${todosDone.length} de ${todos.length}`} />
          </div>
        </div>

        {!todos.length && (
          <div className={styles.emptyContainer}>
            <ListChecks />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {todosNotDone.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheckTodo={() => toggleTodoDone(todo.id)}
              onDelete={() => removeTodo(todo.id)}
            />
          )
        })}
        {todosDone.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheckTodo={() => toggleTodoDone(todo.id)}
              onDelete={() => removeTodo(todo.id)}
            />
          )
        })}
      </main>
    </div>
  )
}
