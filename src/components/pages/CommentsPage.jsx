import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "@features/comments/commentsSlice";

const CommentsPage = () => {
  const dispatch = useDispatch();
  const { loading, comments, error } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  console.log(loading, comments, error);
  return <div></div>;
};

export default CommentsPage;
