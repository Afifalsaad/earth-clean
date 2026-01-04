import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllContributions = () => {
  const axiosSecure = useAxiosSecure();

  const { data: contributions = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-contribution");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center mx-auto">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-accent bg-secondary">
        <h2 className="text-4xl font-bold text-center mb-3">
          All Contributions: ({contributions.length})
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between my-2 md:items-center"></div>
        {/* // Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table table-zebra text-accent">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Contributed For</th>
                <th>Amount</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((contribution, index) => (
                <tr key={contribution._id}>
                  <th>{index + 1}</th>
                  <td>{contribution.name}</td>
                  <td>{contribution.email}</td>
                  <td>{contribution.title}</td>
                  <td>{contribution.amount}</td>
                  <td>{contribution.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Cards */}
        <div className="md:hidden space-y-4 bg-secondary text-accent">
          {contributions.map((contribution) => (
            <div
              key={contribution._id}
              className="p-4 border rounded-lg shadow-sm bg-base-100">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold">{contribution.name}</h3>
              </div>
              <h2>
                <span className="font-semibold"></span>Email:{" "}
                {contribution.email}
              </h2>
              <p>
                <span className="font-semibold mb-3">Contributed For: </span>{" "}
                {contribution.title}
              </p>
              <p>
                <span className="font-semibold mb-3">Amount: </span>{" "}
                {contribution.amount}
              </p>
              <p>
                <span className="font-semibold mb-3">Transaction ID: </span>{" "}
                {contribution.transactionId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContributions;
