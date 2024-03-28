import { CartIcon, Input, LogoIcon, UserIcon } from '@/shared'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container'}>
        <div className={s.headerTop}>
          <div className={s.contacts}>
            <a href={'tel:+420336775664'}>+420 336 775 664</a>
            <a href={'mailto:info@freshnesecom.com '}>info@freshnesecom.com</a>
          </div>
          <div className={s.menu}>
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>
        <div className={s.headerBottom}>
          <LogoIcon />
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <Input iconPosition={'right'} placeholder={'Search Products...'} type={'search'} />
          </div>
          <div style={{ alignItems: 'center', display: 'flex', gap: '40px' }}>
            <UserIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  )
}
