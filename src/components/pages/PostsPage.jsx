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
    <div className="flex flex-col items-center gap-6">
      {posts?.map((post) => (
        <div key={uniqid()} className="w-4/5 bg-zinc-700 p-8">
          <h2 className="mb-8 w-1/2 text-2xl font-semibold capitalize">
            {post.title}
          </h2>
          <p className="w-1/2">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
