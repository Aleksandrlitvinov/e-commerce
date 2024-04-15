import { ProductType } from '@/features'

export type ResponseProductsType = {
  limit: number
  products: ProductType[]
  skip: number
  total: number
}
