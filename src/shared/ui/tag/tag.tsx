import { ElementType } from 'react'

import { CloseIcon } from '@/shared'
import clsx from 'clsx'

import s from './tag.module.scss'

type PropsType<T extends ElementType = 'button'> = {
  as?: T
  size: 'narrow' | 'wide'
  type: 'primary' | 'secondary' | 'tertiary'
  withClose: boolean
}

export const Tag = <T extends ElementType = 'button'>(props: PropsType<T>) => {
  const {
    as: Component = 'button',
    size = 'narrow',
    type = 'secondary',
    withClose,
    ...rest
  } = props

  const classNames = {
    tag: clsx(s.tagWrapper, s[type], s[size], withClose && s.withIcon),
  }

  return (
    <Component className={classNames.tag} {...rest}>
      <p className={s.tagTitle}>Tag</p>
      {withClose && <CloseIcon />}
    </Component>
  )
}

// TODO: narrow; wide; with close; without close
