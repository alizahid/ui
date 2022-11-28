import { type FunctionComponent } from 'react'

import { Select } from '~/components/select'

export const PageSelect: FunctionComponent = () => (
  <>
    <h1>Select</h1>

    <Select
      items={[
        {
          label: 'One',
          value: 'one',
        },
        {
          label: 'Two',
          value: 'two',
        },
        {
          label: 'Three',
          value: 'three',
        },
      ]}
      label="Label"
      value="two"
    />

    <Select
      error="Error"
      hint="Hint"
      items={[
        {
          label: 'One',
          value: 'one',
        },
        {
          label: 'Two',
          value: 'two',
        },
        {
          label: 'Three',
          value: 'three',
        },
      ]}
      label="Label"
      value="three"
    />
  </>
)
