import { ProductCard, ProductType } from '@/features'
import { ArrowRightIcon, Button } from '@/shared'

import s from './products-section.module.scss'

type PropsType = {
  buttonTitle: string
  categories?: string[]
  products?: ProductType[]
  title: string
}
export const ProductsSection = (props: PropsType) => {
  const { buttonTitle, categories, products, title } = props

  return (
    <div className={s.section}>
      <div className={s.categories}>
        <p className={s.title}>{title}</p>
        <div className={s.categoriesList}>
          {categories?.map(c => (
            <p className={s.category} key={c}>
              {c}
            </p>
          ))}
        </div>
        <Button size={'medium'} variant={'tertiary'}>
          {buttonTitle}
          <ArrowRightIcon />
        </Button>
      </div>
      <div className={s.products}>
        {products?.map(p => (
          <ProductCard
            description={p.description}
            discountPercentage={p.discountPercentage}
            id={p.id}
            key={p.id}
            price={p.price}
            stock={p.stock}
            thumbnail={p.thumbnail}
            title={p.title}
            type={'grid'}
          />
        ))}
      </div>
    </div>
  )
}
