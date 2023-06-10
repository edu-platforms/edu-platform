import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import authReducer from "./auth/features.js";
import appReducer from '../slices/appSlice.js'

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: {
    app: appReducer,
    rootReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Auth
export * from "./auth/actions.js";
export * from "./auth/features.js";
