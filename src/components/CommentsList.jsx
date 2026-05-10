import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <>
          <Comment key={index} data={comment} />
          <div className="ml-5 border-l border-l-black">
            <CommentsList comments={comment.replies} />
          </div>
        </>
      ))}
    </div>
  );
};

export default CommentsList;
