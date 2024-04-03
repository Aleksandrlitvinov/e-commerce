import s from './product-additional-info.module.scss'

type AddInfoType = {
  brand?: string
  stock?: number
}
export const ProductAdditionalInfo = (props: AddInfoType) => {
  const { brand, stock } = props
  const addInfo = [
    { title: 'Brand', value: brand },
    { title: 'Delivery', value: 'Europe' },
    { title: 'Stock', value: `${stock} pcs` },
  ]

  return (
    <div className={s.data}>
      {addInfo.map(item => (
        <div className={s.dataItem} key={item.title}>
          <p className={s.dataItemTitle}>{item.title}</p>
          <p className={s.dataItemValue}>{item.value}</p>
        </div>
      ))}
    </div>
  )
}
