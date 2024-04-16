import { ProductsSection } from '@/features'
import { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsQuery } from '@/shared'

export const HomePage = () => {
  const { data: categoriesList } = useGetCategoriesQuery()
  const { data: productsList } = useGetProductsQuery()
  const { data: productsWomen } = useGetProductsByCategoryQuery('womens-dresses')

  const topCategories = categoriesList?.slice(0, 6)
  const womenCategories = categoriesList?.filter(cat => cat.includes('womens'))

  const products = productsList?.products.slice(5, 8)
  const womenProducts = productsWomen?.products.slice(2, 5)

  return (
    <div>
      <ProductsSection
        buttonTitle={'More Products'}
        categories={topCategories}
        products={products}
        title={'Best selling products'}
      />
      <ProductsSection
        buttonTitle={'More Products'}
        categories={womenCategories}
        products={womenProducts}
        title={'Best for women'}
      />
    </div>
  )
}
