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
    <form onSubmit={handleSub} className="flex flex-col mt-2">
      <textarea
        id="cmtBox"
        placeholder={label === "Add" ? "What is your opinion?!" : "Reply it!!"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="block p-3 w-11/12 text-sm mx-auto mb-2 rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
      />
      {error && <p>{error}</p>}
      <div className="flex justify-center items-center gap-2">
        {label === "Reply" && (
          <button
            type="button"
            onClick={handleCancle}
            className="focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700 cursor-pointer text-red-200"
          >
            cancel
          </button>
        )}
        <button
          type="submit"
          disabled={!input}
          className="focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-3 py-2.5  mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700 cursor-pointer text-blue-300"
        >
          {label === "Add" ? "Add" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
