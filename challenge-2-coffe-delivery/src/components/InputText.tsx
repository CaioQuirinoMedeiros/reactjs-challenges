import * as React from 'react'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  function InputText_(props, ref) {
    const { className, errorMessage, ...rest } = props

    return (
      <div className={`flex flex-col ${className}`}>
        <input
          className={`rounded-[0.25rem] min-h-[2.5rem] p-3 bg-base-input text-base-text placeholder:text-base-label border border-base-button outline-none focus:border-yellow-dark text-s min-w-[1rem] ${
            errorMessage ? 'border-red-600' : ''
          }`}
          ref={ref}
          {...rest}
        />
        {!!errorMessage && <span className='text-s text-red-600 mt-1'>{errorMessage}</span>}
      </div>
    )
  }
)
