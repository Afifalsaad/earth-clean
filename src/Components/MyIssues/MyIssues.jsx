import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myIssues?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
      });
  }, [user]);

  return (
    <div>
      <div className="overflow-x-auto bg-white/50 max-w-6xl mx-auto my-14">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {issues.map((issue, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.displayName}</td>
                <td>
                  {issue.title}
                  <br />
                </td>
                <td>{issue.status}</td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyIssues;
