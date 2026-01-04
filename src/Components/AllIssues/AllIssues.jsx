import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Skeleton from "./Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router";

const AllIssues = () => {
  const axiosSecure = useAxiosSecure();
  const limit = 3;

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["issues"],
      queryFn: async ({ pageParam = 0 }) => {
        const res = await axiosSecure.get(
          `/allIssues?limit=${limit}&skip=${pageParam}`
        );
        console.log(res.data);
        return res.data;
      },
      getNextPageParam: (lastPage, pages) => {
        return lastPage.hasMore ? pages.length * limit : undefined;
      },
    });

  const allIssues = data?.pages.flatMap((page) => page.data) || [];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredIssue = allIssues.filter((issue) => {
    const matchedCategory = category === "All" || issue.category === category;
    const matchedStatus = status === "All" || issue.status === status;
    const searchedIssue =
      search === "" ||
      issue?.title.toLowerCase().includes(search.toLowerCase());

    return matchedCategory && matchedStatus && searchedIssue;
  });

  let sortedIssue = [...filteredIssue];
  if (sort === "Higher - Lower") {
    sortedIssue.sort((a, b) => Number(b.amount) - Number(a.amount));
  }
  if (sort === "Lower - Higher") {
    sortedIssue.sort((a, b) => Number(a.amount) - Number(b.amount));
  }

  return (
    <div className="bg-secondary min-h-screen">
      {/* DropDown */}
      <div className="flex flex-col lg:flex-row px-1 justify-between mx-auto max-w-6xl pt-14">
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
        <div className="flex flex-row gap-3 py-2">
          {/* Category */}
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
          <div className="w-40">
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
          {/* Sort */}
          <div className="w-40">
            <h1>Sort By Amount: </h1>
            <fieldset className="fieldset">
              <select
                defaultValue="All"
                onChange={(e) => setSort(e.target.value)}
                className="select">
                <option>None</option>
                <option>Higher - Lower</option>
                <option>Lower - Higher</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="max-w-6xl pb-14 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i}></Skeleton>
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={sortedIssue.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={
            <div className="flex justify-center py-6">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          }
          endMessage={
            <p className="text-center text-gray-400 py-6">
              No more data available
            </p>
          }>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
            {sortedIssue.map((issue) => (
              <div
                key={issue._id}
                className="card bg-secondary border border-accent/5 shadow-sm">
                <img
                  src={issue.image}
                  className="w-[400px] h-[300px] object-cover px-4 pt-4"
                />
                <div className="card-body">
                  <h2 className="card-title">{issue.title}</h2>
                  <p>{issue.category}</p>
                  <p>{issue.location}</p>
                  <p>
                    <span className="text-accent font-semibold">Amount:</span>{" "}
                    {issue.amount}
                  </p>
                  <Link
                    to={`/issueDetails/${issue._id}`}
                    className="btn btn-primary w-full mt-4">
                    See Details
                  </Link>
                </div>
              </div>
            ))}
            {isFetchingNextPage &&
              Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default AllIssues;
