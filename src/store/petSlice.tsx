import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PetState {
  petName: string;
  petBreed: string;
  petColor: string;
  allOwners: string[];
  petOwner: string;
  petCheckIn: boolean;
  timeCheckIn: string;
  pets: PetsProp[];
  IDs: Array<string>;
}

export interface PetsProp {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
  petCheckIn: boolean;
  timeCheckIn: string;
}

const initialState: PetState = {
  petName: "",
  petBreed: "",
  petOwner: "",
  petColor: "",
  timeCheckIn: "Not checked in",
  allOwners: [],
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
    setAllOwners: (state, action: PayloadAction<string[]>) => {
      state.allOwners = action.payload;
    },
    setPets: (state, action: PayloadAction<PetsProp[]>) => {
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
  setAllOwners,
  setPetOwner,
  setPets,
  setIDs,
} = petSlice.actions;
export default petSlice.reducer;
