import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
import { commentsList } from "../utils/commentsData";

const CommentsContainer = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold p-2">Comments</h3>
      <CommentsList comments={commentsList} />
    </div>
  );
};

export default CommentsContainer;
