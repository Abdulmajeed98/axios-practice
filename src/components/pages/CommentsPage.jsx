import React from "react";
import { useDispatch, useSelector } from "react-redux";
const CommentsPage = () => {
  const dispatch = useDispatch();
  const { loading, comments, error } = useSelector((state) => state.comments);
  return <div></div>;
};

export default CommentsPage;
