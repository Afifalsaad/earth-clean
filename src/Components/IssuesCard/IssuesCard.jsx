import React from "react";
import { Link } from "react-router";

const IssuesCard = ({ issue }) => {

  return (
    <div className="h-full mt-2">
      <div className="card bg-secondary p-2 border border-accent/5 rounded-xl h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
        {/* Image */}
        <figure className="h-40 w-full overflow-hidden">
          <img
            src={issue.image || "/placeholder.jpg"}
            alt={issue.title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Body */}
        <div className="card-body p-4 flex flex-col justify-between h-75">
          <div className="space-y-2">
            <h2 className="card-title text-sm lg:text-base font-semibold line-clamp-2 min-h-10">
              {issue.title}
            </h2>

            <p className="text-xs text-accent line-clamp-5 min-h-18">
              {issue.description}
            </p>
              <hr />
            {/* Meta info */}
            <div className="grid grid-cols-2 gap-1 text-xs pt-2">
              <span>
                <strong>Category:</strong> {issue.category}
              </span>
              <span>
                <strong>Location:</strong> {issue.location}
              </span>
              <span>
                <strong>Status:</strong> {issue.status || "Open"}
              </span>
              <span>
                <strong>Date:</strong> {issue.date || "N/A"}
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4">
            <Link
              to={`/issueDetails/${issue._id}`}
              className="btn btn-primary btn-sm w-full text-primary-content">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
