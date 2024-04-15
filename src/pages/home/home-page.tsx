import { ProductsSection } from '@/features'
import { useGetCategoriesQuery, useGetProductsQuery } from '@/shared'

export const HomePage = () => {
  const { data: categoriesList } = useGetCategoriesQuery()
  const { data: productsList } = useGetProductsQuery()
  const categories = categoriesList?.slice(0, 6)
  const products = productsList?.products?.slice(5, 8)

  return (
    <div>
      <ProductsSection
        buttonTitle={'More Products'}
        categories={categories}
        products={products}
        title={'Best selling products'}
      />
    </div>
  )
}
