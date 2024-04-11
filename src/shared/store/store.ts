import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {},
})

export type AppDispatch = typeof store.dispatch
export type RootStore = ReturnType<typeof store.getState>
