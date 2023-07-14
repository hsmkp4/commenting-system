import React from "react";
import { RxAvatar } from "react-icons/rx";

const Comment = ({
  id,
  createdAt,
  body,
  parentId,
  userId,
  username,
  replyItems,
}) => {
  return (
    <div className="flex gap-1">
      <RxAvatar size={50} color={replyItems ? "#333" : "#999"} />
      <div>
        <div className="flex gap-2">
          <div>{username}</div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
        </div>
        <div>{body}</div>
        <div>
          {replyItems?.map((el) => (
            <Comment key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
