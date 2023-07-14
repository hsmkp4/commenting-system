import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getParent, getReplies } from "../../store/commentsSlice";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

const CommentSys = () => {
  const { allComments, parentComments, replies } = useSelector(
    (s) => s.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    dispatch(getParent());
    dispatch(getReplies());
  }, [allComments]);
  return (
    <>
      <CommentForm />
      <CommentsList />
    </>
  );
};

export default CommentSys;
