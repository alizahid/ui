import { type FunctionComponent } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { router } from '~/main'

export const Home: FunctionComponent = () => {
  const components = router.routes[0].children ?? []

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 flex h-screen w-60 flex-col overflow-auto bg-white py-6 dark:bg-black">
        <h3 className="mx-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Components
        </h3>

        <nav className="mt-2 flex flex-col text-sm">
          {components.map(({ id, path }) => (
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  'px-3 py-2 transition hover:bg-neutral-100 dark:hover:bg-neutral-900',
                  isActive && 'bg-neutral-100 dark:bg-neutral-900 font-medium'
                )
              }
              key={id}
              to={String(path)}
            >
              {id}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex flex-1 flex-col items-start gap-12 p-6">
        <Outlet />
      </main>
    </div>
  )
}
