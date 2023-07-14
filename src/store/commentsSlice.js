import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allComments } from "../data";
import axios from "axios";

const initialState = {
  allComments,
  parentComments: "",
  replies: "",
  toReplyId: "",
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
      s.parentComments = s.allComments
        .filter((el) => !el.parentId)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    },
    getReplies: (s) => {
      s.replies = s.allComments
        .filter((el) => el.parentId)
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    },
    addComment: (s, a) => {
      const newCmt = {
        id: crypto.randomUUID(),
        username: a.payload.name,
        userId: a.payload.id,
        body: a.payload.data,
        parentId: a.payload.parentId,
        createdAt: new Date().toISOString(),
      };
      s.allComments.push(newCmt);
    },
    setToReplyId: (s, a) => {
      s.toReplyId = a.payload;
    },
    clearToReplyId: (s, a) => {
      s.toReplyId = "";
    },
    deleteComment: (s, a) => {
      const { id, parentId } = a.payload;
      console.log(id, parentId);
      if (parentId) {
        const newarr = s.allComments.filter((el) => el.id !== id);
        s.allComments = newarr;
      } else {
        const newarr = s.allComments
          .filter((el) => el.parentId !== id)
          .filter((el) => el.id !== id);
        s.allComments = newarr;
      }
    },
  },
  extraReducers: (b) => {
    b.addCase(getData.pending, (s, a) => {
      // handle page loading
    });
    b.addCase(getData.fulfilled, (s, a) => {
      s.allComments = a.payload;
    });
    b.addCase(getData.rejected, (s, a) => {
      // handle error
    });
  },
});
export const {
  getParent,
  getReplies,
  addComment,
  setToReplyId,
  clearToReplyId,
  deleteComment,
} = commentsSlice.actions;
export default commentsSlice.reducer;
