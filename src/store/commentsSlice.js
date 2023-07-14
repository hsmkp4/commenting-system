import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allComments } from "../data";
import axios from "axios";

const initialState = {
  allComments,
  data: "",
};

export const getData = createAsyncThunk("comments/getData", async () => {
  const res = await axios("URL");
  return res.data;
});
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(getData.pending, (s, a) => {
      //   handle page loading
    });
    b.addCase(getData.fulfilled, (s, a) => {
      s.allComments = a.payload;
    });
    b.addCase(getData.rejected, (s, a) => {
      // handle error
    });
  },
});
// export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
