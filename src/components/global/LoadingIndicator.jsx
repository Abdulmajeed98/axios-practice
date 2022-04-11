import React from "react";
import ReactLoading from "react-loading";
const LoadingIndicator = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 text-3xl">
      <ReactLoading type="spinningBubbles" className="h-3 w-3" />
      Loading...
    </div>
  );
};

export default LoadingIndicator;
