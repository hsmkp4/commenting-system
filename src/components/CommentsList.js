import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentsList = () => {
  const { allComments, parentComments, replies } = useSelector(
    (s) => s.comments
  );
  const getReplies = (cmtId) =>
    replies
      .filter((el) => el.parentId === cmtId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  return (
    <div>
      <h1>Comments</h1>
      {parentComments &&
        parentComments.map((el) => (
          <Comment key={el.id} {...el} replyItems={getReplies(el.id)} />
        ))}
    </div>
  );
};

export default CommentsList;
