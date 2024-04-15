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
    }
  },
})

export const { useGetProductsQuery } = productsApi
