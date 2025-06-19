import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./slices/alertSlice";
import exampleReducer from "./slices/exampleSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    example: exampleReducer,
  },
});

// export RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
