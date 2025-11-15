import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import IssueDetails from "../Issue Deatils/IssueDetails";

const AllIssues = () => {
  const issues = useLoaderData();
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredIssue = issues.filter((issue) => {
    const matchedCategory = category === "All" || issue.category === category;
    const matchedStatus = status === "All" || issue.status === status;

    return matchedCategory && matchedStatus;
  });

  return (
    <div>
      {/* DropDown */}
      <div className="flex justify-start mx-auto gap-6 max-w-6xl mt-14">
        <div className="w-40">
          <fieldset className="fieldset w-full">
            <select
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select w-full">
              <option>All</option>
              <option>Garbage</option>
              <option>Illegal Construction</option>
              <option>Broken Public Property</option>
              <option>Road Damage</option>
            </select>
          </fieldset>
        </div>
        {/* Status */}
        <div className="w-40">
          <fieldset className="fieldset">
            <select
              defaultValue={category}
              onChange={(e) => setStatus(e.target.value)}
              className="select">
              <option>All</option>
              <option>ongoing</option>
              <option>ended</option>
            </select>
          </fieldset>
        </div>
      </div>

      <div className="max-w-6xl mb-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {filteredIssue.map((issue) => (
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
                className="bg-sky-950 mt-4 text-center py-2 px-4 hover:cursor-pointer text-white w-full">
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIssues;
