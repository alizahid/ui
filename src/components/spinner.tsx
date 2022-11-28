import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  classNameBackground?: string
  classNameForeground?: string
}

export const Spinner: FunctionComponent<Props> = ({
  className,
  classNameBackground,
  classNameForeground,
}) => (
  <svg
    className={twMerge('w-8 h-8 animate-spin', className)}
    viewBox="0 0 100 100"
  >
    <circle
      className={twMerge(
        'opacity-25 stroke-neutral-400 dark:stroke-neutral-600',
        classNameBackground
      )}
      cx={50}
      cy={50}
      fill="none"
      r={44}
      strokeWidth={12}
    />

    <circle
      className={twMerge(
        'stroke-primary-400 dark:stroke-primary-600',
        classNameForeground
      )}
      cx={50}
      cy={50}
      fill="none"
      r={44}
      strokeDasharray={200}
      strokeDashoffset={200}
      strokeLinecap="round"
      strokeWidth={12}
    />
  </svg>
)
