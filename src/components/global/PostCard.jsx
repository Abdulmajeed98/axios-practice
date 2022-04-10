import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <div className="w-4/5 bg-zinc-700 p-8">
      <h2 className="mb-8 w-1/2 text-2xl font-semibold capitalize">{title}</h2>
      <p className="w-1/2">{body}</p>
    </div>
  );
};

export default PostCard;
