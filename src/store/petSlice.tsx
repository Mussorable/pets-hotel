import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PetState {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
}

const initialState: PetState = {
  petName: "",
  petBreed: "",
  petColor: "",
  petOwner: "",
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPetName: (state, action: PayloadAction<string>) => {
      state.petName = action.payload;
    },
    setPetBreed: (state, action: PayloadAction<string>) => {
      state.petBreed = action.payload;
    },
    setPetColor: (state, action: PayloadAction<string>) => {
      state.petColor = action.payload;
    },
    setPetOwner: (state, action: PayloadAction<string>) => {
      state.petOwner = action.payload;
    },
  },
});

export const { setPetName, setPetBreed, setPetColor, setPetOwner } =
  petSlice.actions;
export default petSlice.reducer;
