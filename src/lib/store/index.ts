import { configureStore } from "@reduxjs/toolkit";
import { appConfigSlice } from "./app-config";
import { spaceSlice } from "./spaces";

export const store = configureStore({
  reducer: {
    appConfig: appConfigSlice.reducer,
    spaces: spaceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
