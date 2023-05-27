import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OwnerState {
  ownerName: string;
  ownerEmail: string;
}

const initialState: OwnerState = {
  ownerName: "",
  ownerEmail: "",
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    setOwnerName: (state, action: PayloadAction<string>) => {
      state.ownerName = action.payload;
    },
    setOwnerEmail: (state, action: PayloadAction<string>) => {
      state.ownerEmail = action.payload;
    },
  },
});

export const { setOwnerName, setOwnerEmail } = ownerSlice.actions;
export default ownerSlice.reducer;
