import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData, getParent, getReplies } from "../store/commentsSlice";
import CommentsList from "./CommentsList";

const CommentSys = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(getParent());
    dispatch(getReplies());
  }, []);
  return (
    <>
      <CommentsList />
    </>
  );
};

export default CommentSys;
