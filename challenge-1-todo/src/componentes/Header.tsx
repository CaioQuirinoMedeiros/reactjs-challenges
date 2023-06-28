import * as React from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './Header.module.css'

import todoLogo from '../assets/logo-todo.svg'
import { Input } from './Input'
import { Button } from './Button'
import { useTodosContext } from '../contexts/TodoContext'

export function Header() {
  const { addTodo } = useTodosContext()

  const [newTodoText, setNewTodoText] = React.useState('')

  function handleAddNewTodo() {
    if (!newTodoText) return

    addTodo(newTodoText)
    setNewTodoText('')
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Logo Todo' />

      <div className={styles.panel}>
        <Input
          value={newTodoText}
          onChangeText={setNewTodoText}
          placeholder='Adicione uma nova tarefa'
          onSubmitEnter={handleAddNewTodo}
          style={{ flex: 1 }}
        />
        <Button
          text='Criar'
          icon={PlusCircle}
          onClick={handleAddNewTodo}
          disabled={!newTodoText}
        />
      </div>
    </header>
  )
}
