import { type FunctionComponent } from 'react'

import { Button } from '~/components/button'

export const PageButton: FunctionComponent = () => (
  <>
    <h1>Button</h1>

    <Button>Hello</Button>

    <Button disabled>Hello</Button>

    <Button loading>Hello</Button>
  </>
)
