import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './auth/features.js'
import authReducer from '../slices/authSlices'
import appReducer from '../slices/appSlice.js'
import profileReducer from '../slices/profileSlice.js'
import eventReducer from '../slices/eventSlice.js'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    event: eventReducer,
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
