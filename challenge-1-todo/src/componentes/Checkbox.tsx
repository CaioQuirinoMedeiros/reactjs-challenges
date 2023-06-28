import { Check } from 'phosphor-react'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  value: boolean
  onValueChange(value: boolean): void
}

export function Checkbox(props: CheckboxProps) {
  const { value, onValueChange } = props

  const checkedClassName = value ? styles.checkedCheckbox : styles.checkboxUnchecked
  const checkboxClassName = `${styles.checkbox} ${checkedClassName}`

  return (
    <button className={checkboxClassName} onClick={() => onValueChange(!value)}>
      {!!value && <Check />}
    </button>
  )
}
