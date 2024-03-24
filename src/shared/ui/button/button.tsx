import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type PropsType<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  size: 'large' | 'medium' | 'small'
  variant: 'outline' | 'primary' | 'secondary' | 'tertiary'
}
export const Button = <T extends ElementType = 'button'>(
  props: PropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof PropsType>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    size = 'large',
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component className={clsx(s[variant], s[size])} {...rest}>
      {children}
    </Component>
  )
}
