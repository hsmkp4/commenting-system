import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fillParentChunk,
  getData,
  getParent,
  getReplies,
} from "../../store/commentsSlice";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

const CommentSys = () => {
  const { allComments } = useSelector((s) => s.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getParent());
    dispatch(getReplies());
  }, [allComments]);

  useEffect(() => {
    dispatch(getData());
    dispatch(fillParentChunk());
  }, []);

  return (
    <>
      <CommentForm />
      <CommentsList />
    </>
  );
};

export default CommentSys;
