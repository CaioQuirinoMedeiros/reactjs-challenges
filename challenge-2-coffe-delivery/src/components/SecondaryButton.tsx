import * as React from 'react'
import { IconProps } from 'phosphor-react'

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ForwardRefExoticComponent<IconProps>
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { icon: Icon, className, children, ...rest } = props

  return (
    <button
      className={`bg-base-button flex flex-row gap-1 items-center justify-center py-1 px-2 rounded-md text-base-text text-xs leading-[0] font-medium font-Roboto hover:bg-base-hover transition ${className}`}
      {...rest}
    >
      {!!Icon && <Icon className='text-base text-purple' />}
      {children}
    </button>
  )
}
