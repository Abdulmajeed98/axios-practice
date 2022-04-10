import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="w-1/3 text-center text-rose-500">
        <h3 className="w-full text-3xl">Opps an error occurred!</h3>
        <p className="w-full px-4 py-2 text-lg">{message}.</p>
      </div>
    </div>
  );
};

export default Error;
