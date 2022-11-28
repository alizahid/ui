import { type FunctionComponent } from 'react'

import { Picker } from '~/components/picker'

export const PagePicker: FunctionComponent = () => (
  <>
    <h1>Picker</h1>

    <Picker
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
      value="two"
    />
  </>
)
