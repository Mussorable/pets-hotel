import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationState {
  isNotification: boolean;
  content: string;
  warning: boolean;
  update: boolean;
}

const initialState: NotificationState = {
  isNotification: false,
  content: "",
  warning: false,
  update: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setIsNotification: (state, action: PayloadAction<boolean>) => {
      state.isNotification = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setWarning: (state, action: PayloadAction<boolean>) => {
      state.warning = action.payload;
    },
    setUpdate: (state, action: PayloadAction<boolean>) => {
      state.update = action.payload;
    },
  },
});

export const { setIsNotification, setContent, setWarning, setUpdate } =
  notificationSlice.actions;
export default notificationSlice.reducer;
