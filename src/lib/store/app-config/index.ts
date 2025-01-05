import { THEME_STORAGE_KEY } from "@/lib/constants/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TAppTheme = "light" | "dark" | "system";

interface IAppConfigState {
  theme: TAppTheme;
}

const initialState: IAppConfigState = {
  theme: (localStorage.getItem(THEME_STORAGE_KEY) as TAppTheme) || "system",
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<{
        theme: TAppTheme;
      }>
    ) => {
      localStorage.setItem(THEME_STORAGE_KEY, action?.payload.theme);
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = appConfigSlice.actions;
