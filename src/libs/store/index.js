import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/features.js'
import appReducer from '../slices/appSlice.js'
import courceReducer from '../slices/courceSlice.js'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cources: courceReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Auth
export * from './auth/actions.js'
export * from './auth/features.js'
