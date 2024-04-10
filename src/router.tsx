import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>Home Page</div>,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
