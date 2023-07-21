import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/features";
import eventReducer from "./event/features";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Auth
export * from "./auth/actions";
export * from "./auth/features";
