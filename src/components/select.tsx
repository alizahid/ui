import { type FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { type PickerItem, Picker } from './picker'

type Props = {
  className?: string
  error?: string
  hint?: string
  items: Array<PickerItem>
  label?: string
  value?: string

  onChange?: (value: string) => void
}

export const Select: FunctionComponent<Props> = ({
  className,
  error,
  hint,
  items,
  label,
  onChange,
  value,
}) => (
  <label className={twMerge('inline-flex flex-col gap-2', className)}>
    {!!label && (
      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {label}
      </span>
    )}

    <Picker items={items} onChange={onChange} value={value} />

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
