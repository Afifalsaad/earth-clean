import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Skeleton from "./Skeleton";

const AllIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: issues = [], isLoading } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allIssues");
      return res.data;
    },
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredIssue = issues.filter((issue) => {
    console.log(issue.title);
    const matchedCategory = category === "All" || issue.category === category;
    const matchedStatus = status === "All" || issue.status === status;
    search === "" || issue?.title.toLowerCase() == search.toLowerCase();
    const searchedIssue =
      search === "" ||
      issue?.title.toLowerCase().includes(search.toLowerCase());

    return matchedCategory && matchedStatus && searchedIssue;
  });

  return (
    <div className="bg-secondary">
      {/* DropDown */}
      <div className="flex justify-between mx-auto gap-6 max-w-6xl pt-14">
        <div className="w-50">
          <h1 className="pb-1">Search Issue: </h1>
          <fieldset className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </fieldset>
        </div>
        <div className="flex flex-row gap-5">
          <div className="w-50">
            <h1>Category: </h1>
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
          <div className="w-50">
            <h1>Status: </h1>
            <fieldset className="fieldset">
              <select
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select">
                <option>All</option>
                <option>ongoing</option>
                <option>ended</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="max-w-6xl pb-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="max-w-6xl pb-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          {filteredIssue.map((issue) => (
            <div className="card bg-secondary border border-accent/5 shadow-sm">
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
                  className="btn btn-primary mt-4 text-center py-2 px-4 hover:cursor-pointer text-white w-full">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllIssues;
