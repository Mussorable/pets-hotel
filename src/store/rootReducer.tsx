import petReducer, { PetState } from "./petSlice";
import ownerReducer, { OwnerState } from "./ownerSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export interface RootState {
  pet: PetState;
  owner: OwnerState;
}

export const rootReducer = combineReducers({
  pet: petReducer,
  owner: ownerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
