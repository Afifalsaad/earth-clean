import React from "react";

const IssuesCard = ({ issue }) => {
  return (
    <div className="card bg-white card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{issue.title}</h2>
        <h3>{issue.description}</h3>
        <p>{issue.category}</p>
        <p>{issue.location}</p>
        <p>{issue.date}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
