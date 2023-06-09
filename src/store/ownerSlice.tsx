import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OwnerState {
  ownerName: string;
  ownerEmail: string;
  owners: OwnersProp[];
  IDs: Array<string>;
}

export interface OwnersProp {
  ownerName: string;
  ownerEmail: string;
}

const initialState: OwnerState = {
  ownerName: "",
  ownerEmail: "",

  owners: [],
  IDs: [],
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
    setOwners: (state, action: PayloadAction<OwnersProp[]>) => {
      state.owners = action.payload;
    },
    setIDsOwners: (state, action: PayloadAction<Array<string>>) => {
      state.IDs = action.payload;
    },
  },
});

export const { setOwnerName, setOwnerEmail, setOwners, setIDsOwners } =
  ownerSlice.actions;
export default ownerSlice.reducer;
