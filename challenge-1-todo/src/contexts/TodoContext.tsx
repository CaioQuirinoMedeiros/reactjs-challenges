import * as React from 'react'

type Todo = {
  id: string
  isDone: boolean
  text: string
}

type TodoContextData = {
  todos: Todo[]
  removeTodo(todoId: string): void
  addTodo(text: string): void
  toggleTodoDone(todoId: string): void
}

const TodoContext = React.createContext({} as TodoContextData)

export function TodoContextProvider({ children }: React.PropsWithChildren) {
  const [todos, setTodos] = React.useState<Todo[]>([])

  function removeTodo(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  function addTodo(text: string) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random().toString(16).slice(2), text: text, isDone: false }
      ]
    })
  }

  function toggleTodoDone(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isDone: !todo.isDone }
        } else {
          return todo
        }
      })
    })
  }
  return (
    <TodoContext.Provider
      value={{ todos, toggleTodoDone, removeTodo, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodosContext = () => {
  return React.useContext(TodoContext)
}
