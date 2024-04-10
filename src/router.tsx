import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { MainLayout } from '@/shared'

const publicRoutes: RouteObject[] = [
  {
    element: 'Home',
    path: '/',
  },
]
const privateRoutes: RouteObject[] = []

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <MainLayout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuth = true

  return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />
}
