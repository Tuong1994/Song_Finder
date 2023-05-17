import { createAsyncThunk } from "@reduxjs/toolkit";
import { IListQuery, getListQuery } from "../../common/interface/Base";
import { toast } from "react-toastify";
import AxiosClient from "../../common/api/axios";
import songPaths from "../../common/api/song";

export const getSongByTerm = createAsyncThunk(
  "getSongByTerm",
  async (query: IListQuery) => {
    try {
      const rs = await AxiosClient.get(
        `${songPaths.search}${getListQuery(query)}`
      );
      return rs.data;
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  }
);
