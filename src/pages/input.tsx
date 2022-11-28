import { type FunctionComponent } from 'react'

import { Input } from '~/components/input'

export const PageInput: FunctionComponent = () => (
  <>
    <h1>Input</h1>

    <Input label="Label" placeholder="Placeholder" />

    <Input error="Error" hint="Hint" label="Label" placeholder="Placeholder" />
  </>
)
