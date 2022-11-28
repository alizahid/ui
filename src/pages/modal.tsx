import { type FunctionComponent } from 'react'

import { Button } from '~/components/button'
import { Modal } from '~/components/modal'

export const PageModal: FunctionComponent = () => (
  <>
    <h1>Modal</h1>

    <Modal
      content={<div className="m-4">Hello world</div>}
      description="Description"
      title="Title"
      trigger={<Button>Open</Button>}
    />
  </>
)
