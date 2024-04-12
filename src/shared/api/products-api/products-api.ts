import { baseApi } from '@/store'

const productsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getProducts: builder.query<any, void>({
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
