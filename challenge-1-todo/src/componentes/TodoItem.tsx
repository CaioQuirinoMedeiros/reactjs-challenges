import * as React from 'react'
import { Trash } from 'phosphor-react'

import styles from './TodoItem.module.css'
import { Checkbox } from './Checkbox'

interface TodoItemProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  todo: {
    text: string
    isDone: boolean
  }
  onCheckTodo(): void
  onDelete(): void
}

export function TodoItem(props: TodoItemProps) {
  const { todo, onCheckTodo, onDelete, ...rest } = props

  const todoDoneClassName = todo.isDone ? styles.todoItemDone : ''
  const todoClassName = `${styles.todoItem} ${todoDoneClassName}`

  const todoTextClassName = todo.isDone
    ? styles.todoTextDone
    : styles.todoTextNotDone

  return (
    <div className={todoClassName} {...rest}>
      <Checkbox value={todo.isDone} onValueChange={onCheckTodo} />
      <span className={todoTextClassName}>{todo.text}</span>
      <button className={styles.deleteButton} onClick={onDelete}>
        <Trash />
      </button>
    </div>
  )
}
