import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Langs } from "../../common/lang";
import { ELang } from "../../common/enum/lang";
import { eng } from "../../common/lang/eng";
import { vn } from "../../common/lang/vn";

interface IStateDefault {
  type: number;
  langs: Langs;
}

const initialState: IStateDefault = {
  type: ELang.ENG,
  langs: eng,
};

const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<number>) => {
      if (action.payload === ELang.ENG) {
        state.type = ELang.ENG;
        state.langs = eng;
      } else {
        state.type = ELang.VN;
        state.langs = vn;
      }
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
