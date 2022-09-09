/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuxState {
  width: number;
}

const initialState: AuxState = {
  width: 0,
};

export const counterSlice = createSlice({
  name: "aux",
  initialState,
  reducers: {
    changeWidth: (state, action: PayloadAction<number>): void => {
      state.width = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeWidth } = counterSlice.actions;

export default counterSlice.reducer;
