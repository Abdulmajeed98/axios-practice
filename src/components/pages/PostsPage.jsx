import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "@features/posts/postsSlice";
import uniqid from "uniqid";
import PostCard from "@components/global/PostCard";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
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
    <div className="flex flex-col items-center gap-6">
      {posts?.map((post) => (
        <PostCard key={uniqid()} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostsPage;
