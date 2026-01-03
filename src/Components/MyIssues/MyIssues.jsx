import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyIssues = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef();
  const [selectedIssue, setSelectedIssue] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data: issues = [] } = useQuery({
    queryKey: ["myIssues", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myIssues?email=${user.email}`);
      setLoading(false);
      return res.data;
    },
  });

  const handleModal = (issue) => {
    setSelectedIssue(issue);
    modalRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = {
      title: e.target.title.value,
      status: e.target.status.value,
      amount: e.target.amount.value,
      category: e.target.category.value,
    };
    fetch(
      `https://assignment-10-server-jet-nine.vercel.app/addIssues/${selectedIssue._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // alert("Updated");
          Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
              issues((prevIssues) =>
                prevIssues.map((issue) =>
                  issue._id === selectedIssue._id
                    ? { ...issue, ...updatedData }
                    : issue
                )
              );
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
        modalRef.current.close();
      });
  };

  const handleDelete = (issue) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-jet-nine.vercel.app/addIssues/${issue._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              issues((prevIssues) =>
                prevIssues.filter((p) => p._id !== issue._id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="bg-secondary ">
      <div className="overflow-x-auto min-h-screen max-w-6xl mx-auto mb-14">
        <h1 className="text-center text-2xl font-bold my-7 ">
          My Issues : <span className="text-[#0084d1]">{issues.length}</span>
        </h1>
        <div className="md:hidden space-y-4 p-2 bg-secondary text-accent">
          {issues.map((issue, index) => (
            <div
              key={issue._id}
              className="border p-4 rounded bg-base-200 shadow">
              <p className="font-bold">
                {index + 1}. {issue.title}
              </p>
              <p>Status: Status</p>
              <p>Name: {user?.displayName}</p>
              <button
                onClick={() => handleModal(issue)}
                className=" py-1 px-2 mt-2 rounded w-full">
                Update
              </button>
              <button
                onClick={() => handleDelete(issue)}
                className="btn btn-primary text-white py-1 px-2 mt-2 rounded w-full">
                Delete
              </button>
            </div>
          ))}
        </div>
        {loading ? (
          <div className="min-h-screen flex justify-center items-center mx-auto">
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : issues.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <p className="font-semibold text-xl">No Data Found</p>
          </div>
        ) : (
          <div>
            <div className="hidden md:block ">
              <table className="table bg-secondary text-accent">
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
                                src={user?.photoURL}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{user?.displayName}</td>
                      <td>
                        {issue.title}
                        <br />
                      </td>
                      <td>{issue.status}</td>

                      <td>
                        <button
                          onClick={() => handleModal(issue)}
                          className="bg-primary mt-4 w-full py-1 px-1 hover:cursor-pointer rounded-sm">
                          Update
                        </button>
                      </td>

                      <td>
                        <button
                          onClick={() => handleDelete(issue)}
                          className="bg-primary mt-4 w-full py-1 px-1 hover:cursor-pointer rounded-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-2xl mb-6">Update Your Selection</h3>

            <form onSubmit={handleUpdate}>
              <fieldset className="fieldset grid grid-cols-2 gap-6">
                <div>
                  <label className="label">Title</label>
                  <input
                    defaultValue={selectedIssue.title}
                    name="title"
                    type="text"
                    className="input w-full border border-black/15 mb-2"
                    placeholder="Issue title"
                  />
                  <label className="label mb-1">Amount</label>
                  <input
                    defaultValue={selectedIssue.amount}
                    name="amount"
                    type="text"
                    className="input border border-black/15 mb-2"
                    placeholder="Amount"
                  />
                  <label className="label mb-1">Category</label>
                  <input
                    defaultValue={selectedIssue.category}
                    name="category"
                    type="name"
                    className="input border border-black/15 mb-2"
                    placeholder="Name"
                  />
                  <fieldset className="fieldset">
                    <legend>Status</legend>
                    <select
                      name="status"
                      defaultValue={selectedIssue.status}
                      className="select bg-white/30">
                      <div className="bg-white">
                        <option>Select</option>
                        <option>ongoing</option>
                        <option>ended</option>
                      </div>
                    </select>
                  </fieldset>
                </div>
              </fieldset>

              <button className="btn bg-sky-700 mt-6 py-2 px-8 hover:cursor-pointer text-white">
                Submit
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn border-none">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyIssues;
