import React from "react";

const CommentCard = ({ name, email, body }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-8 bg-yellow-700 px-4 py-2">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-medium">{name}</p>
        <p className="text-lg">{email}</p>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
