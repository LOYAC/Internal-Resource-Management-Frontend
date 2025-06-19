import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertQueue: [], // slice’s initial state
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    // adds a new alert to the queue
    enqueueAlert: (state, action: PayloadAction<any>) => {
      //@ts-ignore
      state.alertQueue.push(action.payload);
    },
    // removes the first alert from the queue
    dequeueAlert: (state) => {
      state.alertQueue.shift();
    },
  },
});

/*
  call enqueueAlert() when you want to show a new alert.
  call dequeueAlert() after the alert is dismissed or timed out.
*/
export const { enqueueAlert, dequeueAlert } = alertSlice.actions;

export default alertSlice.reducer;
