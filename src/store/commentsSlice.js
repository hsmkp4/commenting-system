import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { allComments } from "../data";
import axios from "axios";

const initialState = {
  allComments,
  parentComments: "",
  parentChunk: [],
  newAddedComments: [],
  replies: "",
  toReplyId: "",
  firstStep: 0,
  secondStep: 10,
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
        .toSorted(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    },

    getReplies: (s) => {
      s.replies = s.allComments
        .filter((el) => el.parentId)
        .toSorted(
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
      if (!a.payload.parentId) {
        s.newAddedComments.unshift(newCmt);
      }
    },

    setToReplyId: (s, a) => {
      s.toReplyId = a.payload;
    },

    clearToReplyId: (s, a) => {
      s.toReplyId = "";
    },

    deleteComment: (s, a) => {
      const { id, parentId } = a.payload;
      if (parentId) {
        const newarrAll = s.allComments.filter((el) => el.id !== id);
        const newarrParCh = s.parentChunk.filter((el) => el.id !== id);
        s.allComments = newarrAll;
        s.parentChunk = newarrParCh;
      } else {
        const newarr = s.allComments
          .filter((el) => el.parentId !== id)
          .filter((el) => el.id !== id);
        const newarrChunk = s.parentChunk
          .filter((el) => el.parentId !== id)
          .filter((el) => el.id !== id);
        const newarrItem = s.newAddedComments
          .filter((el) => el.parentId !== id)
          .filter((el) => el.id !== id);
        s.allComments = newarr;
        s.parentChunk = newarrChunk;
        s.newAddedComments = newarrItem;
      }
    },

    fillParentChunk: (s, a) => {
      const newItms = s.parentComments.slice(s.firstStep, s.secondStep);
      s.parentChunk.push(...newItms);
      s.firstStep = s.secondStep;
      s.secondStep = s.secondStep + 8;
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
  fillParentChunk,
} = commentsSlice.actions;
export default commentsSlice.reducer;
