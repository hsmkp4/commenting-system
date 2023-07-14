import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allComments } from "../data";
import axios from "axios";

const initialState = {
  allComments,
  parentComments: "",
  replies: "",
};

export const getData = createAsyncThunk("comments/getData", async () => {
  const res = await axios("URL");
  return res.data;
});
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getParent: (s) => {
      s.parentComments = s.allComments.filter((el) => !el.parentId);
    },
    getReplies: (s) => {
      s.replies = s.allComments.filter((el) => el.parentId);
    },
  },
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
export const { getParent, getReplies } = commentsSlice.actions;
export default commentsSlice.reducer;
