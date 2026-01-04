import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
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
          All Users: ({users.length})
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between my-2 md:items-center"></div>
        {/* // Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table table-zebra text-accent">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Cards */}
        <div className="md:hidden space-y-4 bg-secondary text-accent">
          {users.map((user) => (
            <div
              key={user._id}
              className="p-4 border rounded-lg shadow-sm bg-base-100">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold">{user.name}</h3>
              </div>
              <h2>
                <span className="font-semibold"></span>Email: {user.email}
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

export default AllUsers;
