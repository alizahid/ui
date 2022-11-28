import { type FunctionComponent } from 'react'

import { TextArea } from '~/components/text-area'

export const PageTextArea: FunctionComponent = () => (
  <>
    <h1>TextArea</h1>

    <TextArea label="Label" placeholder="Placeholder" />

    <TextArea
      error="Error"
      hint="Hint"
      label="Label"
      placeholder="Placeholder"
    />
  </>
)
