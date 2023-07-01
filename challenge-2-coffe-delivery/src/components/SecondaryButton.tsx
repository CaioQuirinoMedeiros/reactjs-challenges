import * as React from 'react'
import { IconProps } from 'phosphor-react'

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ForwardRefExoticComponent<IconProps>
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { icon: Icon, children, ...rest } = props

  return (
    <button
      className='bg-base-button h-8 flex flex-row gap-1 items-center justify-center p-1 rounded-md text-base-text min-w-[8rem] text-xs leading-[0] font-medium font-Roboto hover:bg-base-hover transition'
      {...rest}
    >
      {!!Icon && <Icon className='text-base' />}
      {children}
    </button>
  )
}
