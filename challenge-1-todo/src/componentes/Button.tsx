import { ButtonHTMLAttributes } from 'react'
import { IconProps } from 'phosphor-react'

import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ForwardRefExoticComponent<IconProps>
}

export function Button(props: ButtonProps) {
  const { text, icon: Icon, ...rest } = props

  return (
    <button className={styles.button} {...rest}>
      {text}
      {!!Icon && <Icon style={{ marginLeft: '0.25rem' }} color="#fff" size={20} />}
    </button>
  )
}
