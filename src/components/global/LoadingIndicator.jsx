import React from "react";
import ReactLoading from "react-loading";
const LoadingIndicator = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 text-3xl">
      <ReactLoading type="spinningBubbles" height={"50px"} width={"50px"} />
      Loading...
    </div>
  );
};

export default LoadingIndicator;
