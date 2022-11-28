import { type InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  error?: string
  hint?: string
  label?: string
  placeholder?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  value?: string

  onChange?: (value: string) => void
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { className, error, hint, label, onChange, placeholder, type, value },
    ref
  ) => (
    <label className={twMerge('inline-flex flex-col gap-2', className)}>
      {!!label && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {label}
        </span>
      )}

      <input
        className={twMerge(
          'w-full px-3 h-12 placeholder-neutral-600 dark:placeholder-neutral-400 transition rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 focus:outline-none focus-visible:ring-2',
          error
            ? 'focus-visible:border-rose-600 focus-visible:ring-rose-500/50'
            : 'focus-visible:border-primary-600 focus-visible:ring-primary-500/50'
        )}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
      />

      {!!hint && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {hint}
        </span>
      )}

      {!!error && (
        <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
          {error}
        </span>
      )}
    </label>
  )
)
