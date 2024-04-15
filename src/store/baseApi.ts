import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_URL } from '../shared/api/const/url-adresses'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
})
