import { AllHTMLAttributes } from 'react'
import styles from './TextBadge.module.css'

interface TextBadgeProps extends AllHTMLAttributes<HTMLDivElement> {
  text: string
}

export function TextBadge(props: TextBadgeProps) {
  const { text, ...rest } = props

  return (
    <div className={styles.textBadge} {...rest}>
      <span>{text}</span>
    </div>
  )
}
