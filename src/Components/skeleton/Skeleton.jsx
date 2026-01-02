import React from "react";

const Skeleton = () => {
  return (
    <div className="h-full animate-pulse">
      <div className="card bg-base-200 p-2 border border-accent/10 rounded-xl h-full flex flex-col overflow-hidden">
        <div className="h-40 w-full bg-base-300 rounded-md mb-2"></div>
        <div className="p-4 flex flex-col justify-between h-80">
          <div className="space-y-2">
            <div className="h-4 bg-base-300 rounded w-3/4"></div>
            <div className="h-3 bg-base-300 rounded w-full"></div>
            <div className="h-3 bg-base-300 rounded w-full"></div>
            <div className="h-3 bg-base-300 rounded w-5/6"></div>
            <div className="h-3 bg-base-300 rounded w-2/3"></div>
            <hr className="border-accent/20 my-2" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-3 bg-base-300 rounded w-full"></div>
              <div className="h-3 bg-base-300 rounded w-full"></div>
              <div className="h-3 bg-base-300 rounded w-full"></div>
              <div className="h-3 bg-base-300 rounded w-full"></div>
            </div>
          </div>
          <div className="pt-4">
            <div className="h-8 bg-base-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
