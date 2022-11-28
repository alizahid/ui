import { type FunctionComponent } from 'react'

import { Spinner } from '~/components/spinner'

export const PageSpinner: FunctionComponent = () => (
  <>
    <h1>Spinner</h1>

    <Spinner />

    <Spinner classNameForeground="stroke-amber-400 dark:stroke-amber-600" />

    <div className="rounded-lg bg-white p-4">
      <Spinner
        classNameBackground="stroke-neutral-600 dark:stroke-neutral-600"
        classNameForeground="stroke-primary-600 dark:stroke-primary-600"
      />
    </div>

    <div className="rounded-lg bg-black p-4">
      <Spinner
        classNameBackground="stroke-neutral-400 dark:stroke-neutral-400"
        classNameForeground="stroke-primary-400 dark:stroke-primary-400"
      />
    </div>
  </>
)
