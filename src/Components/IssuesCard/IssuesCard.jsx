import React from "react";
import { Link } from "react-router";

const IssuesCard = ({ issue }) => {
  const sortedDetails = issue.description.slice(0, 250);

  return (
    <div className="bg-white text-black">
      <div className="card card-lg ">
        <div className="card-body min-h-[300px]">
          <h2 className="card-title min-h-16">{issue.title}</h2>
          <p className="min-h-[180px] ">{sortedDetails}...</p>
          <p><span className="font-semibold">Category:</span> {issue.category}</p>
          <p><span className="font-semibold">Location:</span> {issue.location}</p>
        </div>
      </div>
      <div className=" card-actions my-8">
        <Link
          to={`/issueDetails/${issue._id}`}
          className="bg-sky-950 mt-4 text-center py-2 px-4 hover:cursor-pointer text-white w-10/12 mx-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default IssuesCard;
