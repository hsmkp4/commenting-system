import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/commentsSlice";

const CommentForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSub = (e) => {
    e.preventDefault();
    dispatch(addComment({ data: input }));
    setInput("");
  };
  return (
    <form onSubmit={handleSub} className="flex flex-col mt-8">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-y-zinc-900"
      />
      <button disabled={!input}>Add</button>
    </form>
  );
};

export default CommentForm;
