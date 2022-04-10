import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";
import uniqid from "uniqid";
const PostsPage = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center text-3xl">
        <p className="w-full bg-red-500 px-4 py-2 text-center">{error}</p>
      </div>
    );
  }
  return (
    <div>
      {posts?.map((post) => (
        <div key={uniqid()}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
