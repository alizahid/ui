import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  error?: string
  hint?: string
  label?: string
  placeholder?: string
  value?: string

  onChange?: (value: string) => void
}

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, error, hint, label, onChange, placeholder, value }, ref) => (
    <label className={twMerge('inline-flex flex-col gap-2', className)}>
      {!!label && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {label}
        </span>
      )}

      <textarea
        className={twMerge(
          'w-full p-3 h-24 placeholder-neutral-600 dark:placeholder-neutral-400 transition rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 focus:outline-none focus-visible:ring-2',
          error
            ? 'focus-visible:border-rose-600 focus-visible:ring-rose-500/50'
            : 'focus-visible:border-primary-600 focus-visible:ring-primary-500/50'
        )}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        ref={ref}
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
