import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "@features/comments/commentsSlice";
import LoadingIndicator from "@components/global/LoadingIndicator";
import Error from "@components/global/Error";
import uniqid from "uniqid";
import CommentCard from "@components/global/CommentCard";

const CommentsPage = () => {
  const dispatch = useDispatch();
  const { loading, comments, error } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, []);
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="grid grid-cols-5 gap-4">
      {comments?.map((comment) => (
        <CommentCard
          key={uniqid()}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
};

export default CommentsPage;
