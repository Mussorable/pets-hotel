import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Draft } from "immer";

export interface PetState {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
  petCheckIn: boolean;

  pets: Draft<PetsProp>[];
  IDs: Array<string>;
}

export interface PetsProp {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
  petCheckIn: boolean;
}

const initialState: PetState = {
  petName: "",
  petBreed: "",
  petColor: "",
  petOwner: "",
  petCheckIn: false,

  pets: [],
  IDs: [],
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

    setPets: (state, action: PayloadAction<Draft<PetsProp>[]>) => {
      state.pets = action.payload;
    },
    setIDs: (state, action: PayloadAction<Array<string>>) => {
      state.IDs = action.payload;
    },
  },
});

export const {
  setPetName,
  setPetBreed,
  setPetColor,
  setPetOwner,
  setPets,
  setIDs,
} = petSlice.actions;
export default petSlice.reducer;
