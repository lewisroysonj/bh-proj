import { ISpaceItem } from "@/lib/types/spaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISpacesState {
  spaces: ISpaceItem[];
}

const initialState: ISpacesState = {
  spaces: [],
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    setSpaces: (
      state,
      action: PayloadAction<{
        spaces: ISpaceItem[];
      }>
    ) => {
      state.spaces = action.payload.spaces;
    },
  },
});

export const { setSpaces } = spaceSlice.actions;
