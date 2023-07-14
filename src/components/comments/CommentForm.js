import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/commentsSlice";

const CommentForm = () => {
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
      addComment({ data: input, id: currentUser.id, name: currentUser.name })
    );
    setInput("");
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
      <button disabled={!input}>Add</button>
    </form>
  );
};

export default CommentForm;
