import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChangeText(value: string): void
  onSubmitEnter?(): void
}

export function Input(props: InputProps) {
  const { value, onChangeText, onSubmitEnter, ...rest } = props

  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onSubmitEnter && onSubmitEnter()
        }
      }}
      {...rest}
    />
  )
}
