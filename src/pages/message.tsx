import { type FunctionComponent } from 'react'

import { Message } from '~/components/message'

export const PageMessage: FunctionComponent = () => (
  <>
    <h1>Message</h1>

    <Message>Message</Message>

    <Message variant="success">Success</Message>

    <Message variant="error">Error</Message>
  </>
)
