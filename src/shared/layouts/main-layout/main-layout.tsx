import { Outlet } from 'react-router-dom'

import { Footer, Header } from '@/features'
import clsx from 'clsx'

import s from './main-layout.module.scss'

export const MainLayout = () => {
  return (
    <div className={clsx(s.layout, 'container')}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
