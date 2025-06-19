import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});

// export RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
