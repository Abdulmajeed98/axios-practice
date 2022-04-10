import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-12 bg-zinc-700 p-8">
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      <p className="text-justify">{body}</p>
    </div>
  );
};

export default PostCard;
