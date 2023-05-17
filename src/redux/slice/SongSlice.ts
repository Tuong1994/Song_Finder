import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISong } from "../../common/interface/Song";
import { IResponse } from "../../common/interface/Base";
import { getSongByTerm } from "../services/SongService";

interface IStateDefault {
  songs: IResponse<ISong>;
  song: ISong | null;
}

const initialState: IStateDefault = {
  songs: { loading: false, page: 1, resultCount: 0, results: [] },
  song: null,
};

const songSlice = createSlice({
  name: "songSlice",
  initialState,
  reducers: {
    filterSongs: (state, action: PayloadAction<string | number>) => {
      if (localStorage.getItem("songs")) {
        state.songs = JSON.parse(localStorage.getItem("songs") ?? "");
      }

      if (action.payload !== -1) {
        const filter = state.songs.results.filter(
          (song) => song.trackExplicitness === action.payload
        );

        state.songs = {
          ...state.songs,
          resultCount: filter.length,
          results: filter,
        };
      }
    },
  },
  extraReducers: (build) => {
    // Fetching
    build.addCase(getSongByTerm.pending, (state) => {
      state.songs = { ...state.songs, loading: true };
    });
    // Response Data
    build.addCase(
      getSongByTerm.fulfilled,
      (state, actions: PayloadAction<IResponse<ISong>>) => {
        state.songs = actions.payload;
        state.songs = { ...state.songs, loading: false };
        if (actions.payload)
          localStorage.setItem("songs", JSON.stringify(actions.payload));
      }
    );
    // Response Error
    build.addCase(getSongByTerm.rejected, (state) => {
      state.songs = { ...state.songs, loading: false };
    });
  },
});

export const { filterSongs } = songSlice.actions;

export default songSlice.reducer;
