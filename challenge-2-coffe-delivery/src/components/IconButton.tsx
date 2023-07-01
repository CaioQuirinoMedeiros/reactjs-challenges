import * as React from 'react'
import { IconProps } from 'phosphor-react'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ForwardRefExoticComponent<IconProps>
}

export function IconButton(props: IconButtonProps) {
  const { icon: Icon, children, ...rest } = props

  return (
    <button
      className='bg-purple-dark h-9 flex items-center justify-center p-2 leading-[0px] rounded-md hover:bg-purple transition'
      {...rest}
    >
      <Icon className='text-white text-xl leading-[0px]' />
    </button>
  )
}
