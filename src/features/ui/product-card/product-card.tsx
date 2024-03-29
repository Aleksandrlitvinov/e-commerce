import { PriceWithDiscount } from '@/features/ui/product-card/services'
import { BlankCover, Button, Tag } from '@/shared'

import s from './product-card.module.scss'

type PropsType = {
  description: string
  discount?: number
  height: string
  imageUrl: string
  price: number
  rating?: number
  title: string
  width: string
}
export const ProductCard = (props: PropsType) => {
  const { description, discount, height, imageUrl, price, title, width } = props

  let currentPrice = price

  if (discount) {
    currentPrice = PriceWithDiscount(price, discount)
  }

  return (
    <div className={s.cardWrapper}>
      <div className={s.image}>
        <BlankCover alt={description} height={height} src={imageUrl} width={width} />
        {discount && (
          <div style={{ left: '12px', position: 'absolute', top: '12px' }}>
            <Tag size={'narrow'} title={`- ${discount} %`} type={'primary'} withClose={false} />
          </div>
        )}
      </div>
      <div style={{ paddingTop: '16px' }}>
        <div style={{ paddingBottom: '16px' }}>
          <p className={s.title}>{title}</p>
          <p className={s.description}>{description}</p>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p className={s.price}>{currentPrice.toFixed(2)}$</p>
            {discount && <div className={s.oldPrice}>{price}$</div>}
          </div>
          <Button className={s.btn} size={'small'} variant={'primary'}>
            Buy now
          </Button>
        </div>
      </div>
    </div>
  )
}
