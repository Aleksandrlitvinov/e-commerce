import { baseApi } from '@/store'

import { ResponseProductsType } from './types'

const productsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getProducts: builder.query<ResponseProductsType, void>({
        query: () => {
          return {
            method: 'GET',
            url: `/products`,
          }
        },
      }),
      getProductsByCategory: builder.query<ResponseProductsType, string>({
        query: categoryName => {
          return {
            method: 'GET',
            url: `/products/category/${categoryName}`,
          }
        },
      }),
    }
  },
})

export const { useGetProductsByCategoryQuery, useGetProductsQuery } = productsApi
