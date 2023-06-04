import petReducer, { PetState } from "./petSlice";
import ownerReducer, { OwnerState } from "./ownerSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notificationReducer, { NotificationState } from "./notificationSlice";

export interface RootState {
  pet: PetState;
  owner: OwnerState;
  notification: NotificationState;
}

export const rootReducer = combineReducers({
  pet: petReducer,
  owner: ownerReducer,
  notification: notificationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
