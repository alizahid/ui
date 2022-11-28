import { type FunctionComponent } from 'react'

import { Switch } from '~/components/switch'

export const PageSwitch: FunctionComponent = () => (
  <>
    <h1>Switch</h1>

    <Switch />

    <Switch value />

    <Switch label="Label" value />

    <Switch disabled label="Disabled" />
  </>
)
