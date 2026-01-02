import React from "react";
import { Link } from "react-router";

const IssuesCard = ({ issue }) => {

  return (
    <div className="h-full">
      <div className="card bg-secondary border border-accent/5 hover:shadow-sm transition-shadow rounded-xl h-full flex flex-col">
        <div className="card-body p-5 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <h2 className="card-title text-base lg:text-lg line-clamp-2 min-h-12">
              {issue.title}
            </h2>

            <p className="text-sm text-accent line-clamp-5 min-h-22">
              {issue.description}...
            </p>

            <p className="text-sm">
              <span className="font-semibold">Category:</span> {issue.category}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Location:</span> {issue.location}
            </p>
          </div>

          <div className="pt-4">
            <Link
              to={`/issueDetails/${issue._id}`}
              className="btn btn-primary w-full text-primary-content">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
