import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllIssuesDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: issues = [] } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/All-issues-dashboard");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div className="text-accent bg-secondary">
        <h2 className="text-4xl font-bold text-center mb-3">
          All Issues: ({issues.length})
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between my-2 md:items-center"></div>
        {/* // Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table table-zebra text-accent">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, index) => (
                <tr key={issue._id}>
                  <th>{index + 1}</th>
                  <td>{issue.title}</td>
                  <td>{issue.category}</td>
                  <td>{issue.location}</td>
                  <td>{issue.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Cards */}
        <div className="md:hidden space-y-4">
          {issues.map((user) => (
            <div
              key={user._id}
              className="p-4 border rounded-lg shadow-sm bg-base-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-14 w-14">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <h3 className="font-semibold">{user.userName}</h3>
              </div>
              <h2>
                <span className="font-semibold"></span>Email: {user.userEmail}
              </h2>
              <p>
                <span className="font-semibold mb-3">Role: </span> {user.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllIssuesDashboard;
