import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, clearToReplyId } from "../../store/commentsSlice";

const CommentForm = ({ label = "Add", parentId = null }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useSelector((s) => s.user);
  const dispatch = useDispatch();

  const handleSub = (e) => {
    e.preventDefault();
    if (!currentUser) {
      setError("please choose user!!");
      return;
    }
    dispatch(
      addComment({
        data: input,
        id: currentUser.id,
        name: currentUser.name,
        parentId,
      })
    );
    setInput("");
    dispatch(clearToReplyId());
  };

  const handleCancle = () => {
    dispatch(clearToReplyId());
  };

  useEffect(() => {
    if (currentUser) {
      setError("");
    }
  }, [currentUser]);
  return (
    <form onSubmit={handleSub} className="flex flex-col mt-8">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-y-zinc-900"
      />
      {error && <p>{error}</p>}
      <div className="flex justify-center gap-2">
        {label === "Reply" && (
          <button type="button" onClick={handleCancle}>
            cancel
          </button>
        )}
        <button type="submit" disabled={!input}>
          {label}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
