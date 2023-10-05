import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface AuthPageState {
  diskSpace: number;
  email: string;
  files: Array<string>;
  name: string;
  password: string;
  usedSpace: number;
  __v: number;
  _id: string;
}
export const initialAuthState: AuthPageState = {
  diskSpace: 0,
  email: "",
  files: [],
  name: "",
  password: "",
  usedSpace: 0,
  __v: 0,
  _id: "",
};

export const authPageSlice = createSlice({
  name: "authPage",
  initialState: initialAuthState,
  reducers: {
    setUserInfo(state, action: PayloadAction<AuthPageState>) {
      Object.assign(state, action.payload);
    },
    setInitialUserData() {
      return initialAuthState;
    },
  },
});

export const {setUserInfo, setInitialUserData} = authPageSlice.actions;
