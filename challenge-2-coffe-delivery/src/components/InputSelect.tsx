import * as React from 'react'
import { IconProps } from 'phosphor-react'
import classnames from 'classnames'

interface InputSelectProps<Value>
  extends React.BaseHTMLAttributes<HTMLDivElement> {
  options: Array<Option<Value>>
  selected: Value
  onChangeSelected(value: Value): void
  isError?: boolean
}

export type Option<T> = {
  value: T
  label: string
  icon?: React.ForwardRefExoticComponent<IconProps>
}

export function InputSelect<T>(props: InputSelectProps<T>) {
  const { options, selected, onChangeSelected, isError, className, ...rest } =
    props

  return (
    <div className={`flex flex-row gap-3 flex-wrap ${className}`} {...rest}>
      {options.map((option) => {
        const isSelected = option.value === selected
        const Icon = option.icon

        const optionClassName = classnames({
          'border-red-600': !!isError,
          'bg-purple-light border-purple': isSelected,
          'hover:bg-base-hover': !isSelected
        })

        return (
          <button
            type='button'
            key={String(option.value)}
            className={`bg-base-button flex flex-row gap-3 items-center justify-center p-4 rounded-md text-base-text text-xs leading-[0] font-medium font-Roboto border transition ${optionClassName}`}
            onClick={() => onChangeSelected(option.value)}
          >
            {!!Icon && <Icon className='text-base text-purple' />}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
