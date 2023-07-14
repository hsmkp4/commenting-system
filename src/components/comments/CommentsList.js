import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentsList = () => {
  const { parentComments, replies } = useSelector((s) => s.comments);
  const getRepWithId = (cmtId) => replies.filter((el) => el.parentId === cmtId);

  return (
    <div>
      <h1>Comments</h1>
      {parentComments &&
        parentComments.map((el) => (
          <Comment key={el.id} {...el} replyItems={getRepWithId(el.id)} />
        ))}
    </div>
  );
};

export default CommentsList;
