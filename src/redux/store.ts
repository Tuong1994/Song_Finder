import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import SongSlice from "./slice/SongSlice";
import LangSlice from "./slice/LangSlice";

const store = configureStore({
  reducer: {
    SongReducer: SongSlice,
    LangReducer: LangSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
