import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '.'
import { PageButton } from './pages/button'
import { PageInput } from './pages/input'
import { PageMessage } from './pages/message'
import { PageModal } from './pages/modal'
import { PagePicker } from './pages/picker'
import { PageSelect } from './pages/select'
import { PageSpinner } from './pages/spinner'
import { PageSwitch } from './pages/switch'
import { PageTextArea } from './pages/text-area'

const root = document.getElementById('root') as HTMLElement

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <PageButton />,
        id: 'Button',
        path: '/button',
      },
      {
        element: <PageInput />,
        id: 'Input',
        path: '/input',
      },
      {
        element: <PageTextArea />,
        id: 'TextArea',
        path: '/text-area',
      },
      {
        element: <PageSpinner />,
        id: 'Spinner',
        path: '/spinner',
      },
      {
        element: <PagePicker />,
        id: 'Picker',
        path: '/picker',
      },
      {
        element: <PageSelect />,
        id: 'Select',
        path: '/select',
      },
      {
        element: <PageSwitch />,
        id: 'Switch',
        path: '/switch',
      },
      {
        element: <PageMessage />,
        id: 'Message',
        path: '/message',
      },
      {
        element: <PageModal />,
        id: 'Modal',
        path: '/modal',
      },
    ],
    element: <Home />,
    path: '/',
  },
])

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
