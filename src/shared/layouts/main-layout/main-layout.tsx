import { Footer, Header } from '@/features'

import s from './main-layout.module.scss'

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main></main>
      <Footer copyright={'Copyright 2024'} tags={['apple', 'grape']} />
    </div>
  )
}
