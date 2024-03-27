import s from './blank-cover.module.scss'

type PropsType = {
  alt: string
  height: string
  src: string
  width: string
}
export const BlankCover = (props: PropsType) => {
  const { alt, height, src, width } = props

  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <img alt={alt} className={s.image} src={src} />
    </div>
  )
}
