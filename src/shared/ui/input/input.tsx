import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { MailIcon, SearchIcon } from '@/shared'
import clsx from 'clsx'

import s from './input.module.scss'

type PropsType = {
  iconPosition?: 'left' | 'right'
  label?: string
  placeholder: string
  type: 'mail' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  const { iconPosition, label, placeholder, type = 'text' } = props

  const classNames = {
    input: clsx(s.inputWrapper, type !== 'text' ? iconPosition && s[iconPosition] : ''),
  }

  return (
    <>
      {label && (
        <label className={s.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={classNames.input}>
        <input className={s.input} placeholder={placeholder} ref={ref} type={type} />
        <div className={s.inputIcon}>
          {type === 'mail' && <MailIcon />}
          {type === 'search' && <SearchIcon />}
        </div>
      </div>
    </>
  )
})
