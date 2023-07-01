import * as React from 'react'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  noop?: boolean
}

export function PrimaryButton(props: PrimaryButtonProps) {
  const { ...rest } = props

  return (
    <button
      className='bg-yellow h-12 flex items-center justify-center p-3 rounded-md text-white min-w-[8rem] text-sm leading-[0] font-bold hover:bg-yellow-dark transition'
      {...rest}
    />
  )
}
