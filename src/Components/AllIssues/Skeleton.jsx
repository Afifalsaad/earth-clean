import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div className="card bg-[#e7ecf9] shadow-sm rounded-xl animate-pulse h-[450px] flex flex-col overflow-hidden">
        {/* Image */}
        <div className="h-40 w-full bg-gray-300" />

        {/* Card body */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          {/* Title + description */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-400 w-3/4 rounded"></div> {/* Title */}
            <div className="h-4 bg-gray-300 w-full rounded"></div>{" "}
            {/* Description line 1 */}
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>{" "}
            {/* Description line 2 */}
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>

          {/* Button */}
          <div className="h-10 bg-gray-400 mt-4 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
