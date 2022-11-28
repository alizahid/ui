import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog'
import { type FunctionComponent, type ReactNode } from 'react'

type Props = {
  content: ReactNode
  description?: string
  title?: string
  trigger: ReactNode
}

export const Modal: FunctionComponent<Props> = ({
  content,
  description,
  title,
  trigger,
}) => (
  <Root>
    <Trigger>{trigger}</Trigger>

    <Portal>
      <Overlay className="fixed inset-0 z-10 bg-black/25 dark:bg-white/25" />

      <Content className="fixed top-1/2 left-1/2 z-20 flex max-h-[calc(100vh-10rem)] w-[calc(100vw-1.5rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-white dark:bg-black lg:w-96">
        <div className="flex flex-col gap-3 bg-neutral-100 p-4 dark:bg-neutral-900">
          {!!title && <Title className="text-xl font-semibold">{title}</Title>}

          {!!description && <Description>{description}</Description>}
        </div>

        <div className="flex-1 overflow-y-auto">{content}</div>

        <Close className="absolute top-0 right-0 p-3 transition hover:text-rose-600 dark:hover:text-rose-400">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Close>
      </Content>
    </Portal>
  </Root>
)
