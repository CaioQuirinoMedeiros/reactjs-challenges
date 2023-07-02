import * as React from 'react'
import { IconProps } from 'phosphor-react'

interface HeroContentItemProps {
  icon: React.ForwardRefExoticComponent<IconProps>
  text: string
  color: string
}

export function HeroContentItem(props: HeroContentItemProps) {
  const { icon: Icon, color, text } = props

  return (
    <div className='flex flex-row items-center gap-2'>
      <div
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-yellow text-white text-[1rem] ${color}`}
      >
        {<Icon />}
      </div>
      <span className='text-m font-normal text-base-text'>{text}</span>
    </div>
  )
}
