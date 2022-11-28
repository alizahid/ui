import { type FunctionComponent, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'message' | 'error' | 'success'
}

export const Message: FunctionComponent<Props> = ({
  children,
  className,
  variant,
}) => (
  <div
    className={twMerge(
      'inline-flex gap-3 items-center border rounded-lg p-3',
      variant === 'error'
        ? 'border-rose-400 dark:border-rose-600'
        : variant === 'success'
        ? 'border-emerald-400 dark:border-emerald-600'
        : 'border-sky-400 dark:border-sky-600',
      className
    )}
  >
    <svg
      className={twMerge(
        'h-5 w-5',
        variant === 'error'
          ? 'stroke-rose-600 dark:stroke-rose-400'
          : variant === 'success'
          ? 'stroke-emerald-600 dark:stroke-emerald-400'
          : 'stroke-sky-600 dark:stroke-sky-400'
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        d={
          variant === 'error'
            ? 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
            : variant === 'success'
            ? 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            : 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
        }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <div className="flex-1">{children}</div>
  </div>
)
