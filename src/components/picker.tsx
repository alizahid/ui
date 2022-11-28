import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select'
import { type ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type PickerItem = {
  left?: ReactNode
  label: string
  value: string
}

type Props = {
  className?: string
  items: Array<PickerItem>
  value?: string

  onChange?: (value: string) => void
}

// eslint-disable-next-line react/display-name
export const Picker = forwardRef<HTMLButtonElement, Props>(
  ({ className, items, onChange, value }, ref) => (
    <Root onValueChange={onChange} value={value}>
      <Trigger
        className={twMerge(
          'focus-visible:border-primary-600 focus-visible:ring-primary-500/50 flex h-12 items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 transition focus:outline-none focus-visible:ring-2 dark:border-neutral-800 dark:bg-black',
          className
        )}
        ref={ref}
      >
        <Value />

        <Icon>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      </Trigger>

      <Portal>
        <Content className="border-primary-600 dark:border-primary-400 z-20 rounded-lg border bg-white dark:bg-black">
          <Viewport>
            {items.map(({ label, left, value }, index) => (
              <Item
                className="flex h-12 cursor-pointer items-center justify-between px-3 transition first:rounded-t-lg last:rounded-b-lg data-[highlighted]:bg-neutral-100 data-[highlighted]:outline-none dark:data-[highlighted]:bg-neutral-900"
                key={index}
                value={value}
              >
                <ItemText asChild>
                  <div className="flex items-center gap-3">
                    {left}

                    <span>{label}</span>
                  </div>
                </ItemText>

                <ItemIndicator>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.5 12.75l6 6 9-13.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ItemIndicator>
              </Item>
            ))}
          </Viewport>
        </Content>
      </Portal>
    </Root>
  )
)
