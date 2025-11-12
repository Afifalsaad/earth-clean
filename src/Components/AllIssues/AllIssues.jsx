import React from "react";
import { Link, useLoaderData } from "react-router";
import IssueDetails from "../Issue Deatils/IssueDetails";

const AllIssues = () => {
  const issues = useLoaderData();
  console.log(issues);

  return (
    <div className="max-w-6xl my-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {issues.map((issue) => (
        <div className="card bg-[#e7ecf9] shadow-sm">
          <img
            className="w-[400px] h-[300px] object-cover px-4 pt-4"
            src={issue.image}
          />

          <div className="card-body">
            <div className="h-[120px]">
              <div>
                <h2 className="card-title">{issue.title}</h2>
                <h3>{issue.category}</h3>
              </div>
              <div className="">
                <h2>{issue.location}</h2>
                <h2>{issue.amount}</h2>
              </div>
              <div></div>
            </div>
            <Link
              to={`/issueDetails/${issue._id}`}
              className="bg-[#97c09e] text-center py-1 px-4 hover:cursor-pointer text-white w-full">
              See Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllIssues;
