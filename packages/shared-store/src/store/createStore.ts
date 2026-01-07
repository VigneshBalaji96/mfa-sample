import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiService } from "../api/apiService";
import authReducer from "../slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export const createAppStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
  });
export type AppStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
