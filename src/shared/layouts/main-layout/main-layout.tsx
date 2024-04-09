import { Footer, Header } from '@/features'
import clsx from 'clsx'

import s from './main-layout.module.scss'

export const MainLayout = ({ children }: any) => {
  return (
    <div className={clsx(s.layout, 'container')}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
