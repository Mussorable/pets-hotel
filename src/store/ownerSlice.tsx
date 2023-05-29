import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Draft } from "immer";

export interface OwnerState {
  ownerName: string;
  ownerEmail: string;

  owners: Draft<OwnersProp>[];
}

export interface OwnersProp {
  ownerName: string;
  ownerEmail: string;
}

const initialState: OwnerState = {
  ownerName: "",
  ownerEmail: "",

  owners: [],
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
    setOwners: (state, action: PayloadAction<Draft<OwnersProp>[]>) => {
      state.owners = action.payload;
    },
  },
});

export const { setOwnerName, setOwnerEmail, setOwners } = ownerSlice.actions;
export default ownerSlice.reducer;
