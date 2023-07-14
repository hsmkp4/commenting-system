import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setToReplyId } from "../../store/commentsSlice";
import CommentForm from "./CommentForm";

const Comment = ({
  id,
  createdAt,
  body,
  parentId,
  userId,
  username,
  replyItems,
  selectedComment,
  setSelectedComment,
}) => {
  const { users } = useSelector((s) => s.user);
  const { toReplyId } = useSelector((s) => s.comments);
  const dispatch = useDispatch();
  const userAvatar = users.find((el) => el.id == userId);

  return (
    <div className="flex gap-1">
      <img
        src={userAvatar.avatar}
        alt={userAvatar.name}
        className="w-20 self-start"
      />
      <div>
        <div className="flex gap-2">
          <div>{username}</div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
        </div>
        <div>{body}</div>
        <div>
          {!parentId && (
            <button onClick={() => dispatch(setToReplyId(id))}>Reply</button>
          )}
          {toReplyId === id && <CommentForm label="Reply" parentId={id} />}

          {replyItems?.map((el) => (
            <Comment key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
