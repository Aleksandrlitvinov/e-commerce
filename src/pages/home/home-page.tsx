import { ProductsSection } from '@/features'

export const HomePage = () => {
  return (
    <div>
      <ProductsSection
        buttonTitle={'More Products'}
        categories={[]}
        products={[]}
        title={'Best selling products'}
      />
    </div>
  )
}
