import { Root, Thumb } from '@radix-ui/react-switch'
import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  disabled?: boolean
  label?: string
  value?: boolean

  onChange?: (value: boolean) => void
}

export const Switch: FunctionComponent<Props> = ({
  className,
  disabled,
  label,
  onChange,
  value,
}) => {
  const component = (
    <Root
      checked={value}
      className={twMerge(
        'data-[state=checked]:bg-primary-600 dark:data-[state=checked]:bg-primary-400 data-[state=checked]:focus-visible:ring-primary-500/50 focus-visible:ring-neutral-500/50 transition focus:outline-none h-8 w-14 rounded-full focus-visible:ring-2 bg-neutral-400 dark:bg-neutral-600 flex',
        className
      )}
      disabled={disabled}
      onCheckedChange={onChange}
    >
      <Thumb className="h-6 w-6 translate-y-1 translate-x-1 rounded-full bg-white shadow-sm transition data-[state=checked]:translate-x-7" />
    </Root>
  )

  if (!label) {
    return component
  }

  return (
    <label
      className={twMerge('flex items-center gap-3 justify-between', className)}
    >
      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {label}
      </span>

      {component}
    </label>
  )
}
