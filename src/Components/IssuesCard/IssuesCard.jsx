import React from "react";
import { Link } from "react-router";

const IssuesCard = ({ issue }) => {
  console.log(issue);
  return (
    <div className="bg-white">
      <div className="card  card-lg shadow-sm  overflow-hidden">
        <div className="card-body max-h-[400px] overflow-visible">
          <h2 className="card-title">{issue.title}</h2>
          <h3>{issue.description}</h3>
          <p>{issue.category}</p>
          <p>{issue.location}</p>
        </div>
      </div>
      <div className=" card-actions my-3">
        <Link
          to={`/issueDetails/${issue._id}`}
          className="btn btn-primary w-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default IssuesCard;
