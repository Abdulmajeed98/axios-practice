import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "@features/posts/postsSlice";
import uniqid from "uniqid";
import PostCard from "@components/global/PostCard";
import LoadingIndicator from "@components/global/LoadingIndicator";
import Error from "@components/global/Error";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="grid grid-cols-3 gap-6">
      {posts?.map((post) => (
        <PostCard key={uniqid()} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostsPage;
