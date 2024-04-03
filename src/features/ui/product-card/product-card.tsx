import { ProductType } from '@/features'
import { PriceWithDiscount } from '@/features/ui/product-card/services'
import { ArrowRightIcon, Button, Tag } from '@/shared'
import clsx from 'clsx'

import s from './product-card.module.scss'

import { ProductAdditionalInfo } from './product-additional-info'

type PropsType = {
  type: 'grid' | 'list'
} & ProductType
export const ProductCard = (props: PropsType) => {
  const { brand, description, discountPercentage, price, stock, thumbnail, title, type } = props

  let currentPrice = price

  if (discountPercentage != null) {
    currentPrice = PriceWithDiscount(price, discountPercentage)
  }

  const classNames = {
    productCard: clsx(type === 'grid' ? s.cardWrapperGrid : s.cardWrapperList),
  }

  return (
    <div className={classNames.productCard}>
      <div className={s.imageWrapper}>
        <img alt={'product-image'} className={s.image} src={thumbnail} />
        {discountPercentage && (
          <div className={s.discount}>
            <Tag
              size={'narrow'}
              title={`- ${discountPercentage} %`}
              type={'primary'}
              withClose={false}
            />
          </div>
        )}
      </div>
      <div className={s.infoWrapper}>
        <div className={s.mainInfo}>
          <div>
            <p className={s.title}>{title}</p>
            <p className={s.description}>{description}</p>
          </div>
          {type === 'list' && <ProductAdditionalInfo brand={brand} stock={stock} />}
        </div>
        <div className={s.priceInfo}>
          <div>
            <p className={s.price}>{currentPrice.toFixed(2)}$</p>
            {discountPercentage && <div className={s.oldPrice}>{price} $</div>}
          </div>
          <Button className={s.btn} size={'small'} variant={'primary'}>
            {type === 'list' ? (
              <div>
                <span style={{ paddingRight: '6px' }}>Product Detail</span>
                <ArrowRightIcon />
              </div>
            ) : (
              <span>Buy now</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
