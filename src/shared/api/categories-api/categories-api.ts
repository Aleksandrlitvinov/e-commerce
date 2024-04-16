import { baseApi } from '@/store'

const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCategories: builder.query<string[], void>({
        query: () => {
          return {
            method: 'GET',
            url: `/products/categories`,
          }
        },
      }),
    }
  },
})

export const { useGetCategoriesQuery } = categoriesApi
