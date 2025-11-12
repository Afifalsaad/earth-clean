import React from "react";
import { Link } from "react-router";

const IssuesCard = ({ issue }) => {
  console.log(issue);
  return (
    <div className="card bg-white card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{issue.title}</h2>
        <h3>{issue.description}</h3>
        <p>{issue.category}</p>
        <p>{issue.location}</p>
        <div className="justify-end card-actions">
          <Link
            to={`/issueDetails/${issue._id}`}
            className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
