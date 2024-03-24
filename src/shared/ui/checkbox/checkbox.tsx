import { useState } from 'react'

import { CheckedIcon, UncheckedIcon } from '@/shared'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type PropsType = {
  label: string
}
export const Checkbox = (props: PropsType) => {
  const [isChecked, setChecked] = useState<boolean>(false)
  const { label } = props

  const onCheckedHandler = () => {
    setChecked(!isChecked)
  }
  const classNames = {
    checkbox: clsx(s.checkbox, isChecked && s.checked),
  }

  return (
    <div className={classNames.checkbox}>
      <div className={s.checkboxIcon} onClick={onCheckedHandler}>
        {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
      </div>
      <p className={s.label}>{label}</p>
    </div>
  )
}
