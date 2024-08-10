import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface appState {
    exploreProgress: number,
    scrollIndex: number,
    scrollable: boolean
}

const initialState: appState = {
    exploreProgress: 0,
    scrollIndex: 0,
    scrollable: true
}
// The official documentation defines a slice as “a collection of Redux reducer logic and actions for a single feature in your app.”
export const exploreSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setExploreProgress: (state, action: PayloadAction<number>) => {
            state.exploreProgress = action.payload;
        },
        setScrollIndex:  (state, action: PayloadAction<number>)  => {
            state.scrollIndex = action.payload
        },
        setScrollable:(state, action: PayloadAction<boolean>)  => {
            state.scrollable = action.payload
        },
    }
})

export const {setExploreProgress, setScrollIndex, setScrollable} = exploreSlice.actions;
export const appStateReducer = exploreSlice.reducer;