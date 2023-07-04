import * as React from 'react'
import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number
  onIncrease(): void
  onDecrease(): void
  min?: number
  max?: number
}

export function InputNumber(props: InputNumberProps) {
  const { value, onIncrease, onDecrease, min = 0, max = 99, ...rest } = props

  function handleDecreaseValue() {
    if (value <= min) return
    onDecrease()
  }

  function handleIncreaseValue() {
    if (value >= max) return
    onIncrease()
  }


  return (
    <div className='flex flex-row bg-base-button rounded-md'>
      <button
        className='w-6 flex items-center justify-center text-sm text-purple hover:text-purple-dark'
        onClick={handleDecreaseValue}
      >
        <Minus />
      </button>
      <input
        type='number'
        className='w-6 border-none bg-transparent outline-none text-center text-m'
        max={99}
        min={0}
        value={value}
        disabled
        {...rest}
      />
      <button
        className='w-6 flex items-center justify-center text-sm text-purple hover:text-purple-dark'
        onClick={handleIncreaseValue}
      >
        <Plus />
      </button>
    </div>
  )
}
