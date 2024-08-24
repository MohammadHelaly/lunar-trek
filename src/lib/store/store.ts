import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "@/lib/store/slices/data-slice";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
