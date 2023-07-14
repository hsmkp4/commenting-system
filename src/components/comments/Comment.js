import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";

const Comment = ({
  id,
  createdAt,
  body,
  parentId,
  userId,
  username,
  replyItems,
}) => {
  const { users } = useSelector((s) => s.user);
  const userAvatar = users.find((el) => el.id == userId);

  return (
    <div className="flex gap-1">
      <img
        src={userAvatar.avatar}
        alt={userAvatar.name}
        className="w-20 self-start"
      />
      {/* <RxAvatar size={50} color={replyItems ? "#333" : "#999"} /> */}
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
