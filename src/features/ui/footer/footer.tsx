import { COPYRIGHT } from '@/features'
import { Tag } from '@/shared'

import s from './footer.module.scss'

type PropsType = {
  tags?: string[]
}

export const Footer = (props: PropsType) => {
  const { tags } = props

  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <div>
          <p className={s.listTitle}>Get in touch</p>
          <div>
            <a href={'#'}>
              <p className={s.listItem}>About Us</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>Careers</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>Press Releases</p>
            </a>
          </div>
        </div>
        <div>
          <p className={s.listTitle}>Connections</p>
          <div>
            <a href={'#'}>
              <p className={s.listItem}>LinkedIn</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>Instagram</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>Youtube</p>
            </a>
          </div>
        </div>
        <div>
          <p className={s.listTitle}>Account</p>
          <div>
            <a href={'#'}>
              <p className={s.listItem}>Your account</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>100 % purchase protection</p>
            </a>
            <a href={'#'}>
              <p className={s.listItem}>Returns Centre</p>
            </a>
          </div>
        </div>
      </div>
      {tags && (
        <div>
          <p className={s.listTitle}>Products Tags</p>
          <div className={s.tagsList}>
            {tags.map(product => (
              <Tag
                key={product}
                size={'wide'}
                title={product}
                type={'secondary'}
                withClose={false}
              />
            ))}
          </div>
        </div>
      )}
      <div>
        <p className={s.copyright}>{COPYRIGHT}</p>
      </div>
    </footer>
  )
}
