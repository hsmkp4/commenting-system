import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, setToReplyId } from "../../store/commentsSlice";
import CommentForm from "./CommentForm";

const Comment = ({
  id,
  createdAt,
  body,
  parentId,
  userId,
  username,
  replyItems,
}) => {
  const { users, currentUser } = useSelector((s) => s.user);
  const { toReplyId } = useSelector((s) => s.comments);
  const dispatch = useDispatch();
  const userAvatar = users.find((el) => el.id === userId);

  return (
    <div className="flex gap-1 ml-8">
      <img
        src={userAvatar?.avatar}
        alt={userAvatar?.name}
        className="w-20 self-start"
      />
      <div>
        <div className="mb-2">
          <div className="flex flex-col">
            <p className="text-xl font-bold m-0 ">{username}</p>
            <p className="text-xs font-thin text-slate-400">
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
          <p className="border-l-2 pl-2 font-mono">{body}</p>
          <div>
            <div className="flex items-center mt-2">
              {!parentId && (
                <button
                  onClick={() => dispatch(setToReplyId(id))}
                  className="font-medium rounded-lg text-sm p-2 border-gray-700 cursor-pointer text-blue-300 border"
                >
                  Reply
                </button>
              )}
              {userId === currentUser.id && (
                <button
                  onClick={() => dispatch(deleteComment({ id, parentId }))}
                  className="font-medium rounded-lg text-sm p-2 border-gray-700 cursor-pointer text-red-400 border"
                >
                  Delete
                </button>
              )}
            </div>
            {toReplyId === id && <CommentForm label="Reply" parentId={id} />}
          </div>
          {replyItems?.map((el) => (
            <Comment key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
