import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import { fillParentChunk } from "../../store/commentsSlice";

const CommentsList = () => {
  const { parentComments, replies, parentChunk, newAddedComments } =
    useSelector((s) => s.comments);
  const dispatch = useDispatch();
  const getRepWithId = (cmtId) => replies.filter((el) => el.parentId === cmtId);

  return (
    <div>
      <h1 className="m-4 text-2xl font-extrabold text-gray-900 dark:text-white ">
        Comments:
      </h1>
      {newAddedComments &&
        newAddedComments?.map((el) => (
          <Comment key={el.id} {...el} replyItems={getRepWithId(el.id)} />
        ))}
      <InfiniteScroll
        dataLength={parentChunk.length}
        next={() => dispatch(fillParentChunk())}
        hasMore={true}
      >
        {parentChunk &&
          parentChunk?.map((el) => (
            <Comment key={el.id} {...el} replyItems={getRepWithId(el.id)} />
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default CommentsList;
