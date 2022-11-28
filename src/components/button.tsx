import {
  type ButtonHTMLAttributes,
  type FunctionComponent,
  type ReactNode,
} from 'react'
import { twMerge } from 'tailwind-merge'

import { Spinner } from './spinner'

type Props = {
  children: ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']

  onClick?: () => void
}

export const Button: FunctionComponent<Props> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  type = 'button',
}) => (
  <button
    className={twMerge(
      'hover:bg-primary-600 dark:hover:bg-primary-400 focus-visible:ring-primary-500/50 inline-flex items-center justify-center px-4 h-12 gap-2 font-semibold rounded-lg focus:outline-none transition enabled:hover:brightness-110 enabled:active:brightness-90 focus-visible:ring-2 bg-black dark:bg-white text-white dark:text-black',
      loading
        ? 'cursor-wait'
        : disabled
        ? 'cursor-not-allowed'
        : 'cursor-pointer',
      className
    )}
    disabled={disabled ?? loading}
    onClick={onClick}
    type={type}
  >
    {children}

    {loading && <Spinner className="h-5 w-5" />}
  </button>
)
