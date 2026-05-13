import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {Array(20)
        .fill(null)
        .map(() => (
          <div className="w-120">
            <div className="w-full rounded-xl mb-2 h-70 bg-gray-300 animate-pulse"></div>
            <div className="w-full rounded-lg mb-2 h-5 bg-gray-300 animate-pulse"></div>
            <div className="w-full rounded-lg mb-2 h-4 bg-gray-300 animate-pulse"></div>
            <div className="w-full rounded-lg mb-2 h-4 bg-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
