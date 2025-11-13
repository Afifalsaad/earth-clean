import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);
  const modalRef = useRef();
  const [selectedIssue, setSelectedIssue] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myIssues?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
      });
  }, [user]);


  const handleModal = (issue) => {
    setSelectedIssue(issue);
    console.log(issue);
    modalRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(selectedIssue._id);

    const updatedData = {
      title: e.target.title.value,
      status: e.target.status.value,
      amount: e.target.amount.value,
      category: e.target.category.value,
    };

    fetch(`http://localhost:3000/addIssues/${selectedIssue._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Updated");
          setIssues((prevIssues) =>
            prevIssues.map((issue) =>
              issue._id === selectedIssue._id
                ? { ...issue, ...updatedData }
                : issue
            )
          );
        }
        modalRef.current.close();
      });
  };

  const handleDelete = (issue) => {
    console.log("clicked");
    console.log(issue._id);

    fetch(`http://localhost:3000/addIssues/${issue._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);
        if (data.deletedCount) {
          alert("Deleted");
          setIssues((prevIssues) =>
            prevIssues.filter((p) => p._id !== issue._id)
          );
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-7">
        My Issues : <span className="text-[#0084d1]">{issues.length}</span>
      </h1>
      <div className="overflow-x-auto min-h-screen max-w-6xl mx-auto mb-14">
        {issues.length === 0 ? (
          <p className="text-xl font-semibold">No data Found</p>
        ) : (
          <table className="table bg-white">
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

                  <td>
                    <button
                      onClick={() => handleModal(issue)}
                      className="bg-sky-950 mt-4 w-full py-1 px-1 hover:cursor-pointer text-white">
                      Update
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(issue)}
                      className="bg-sky-950 mt-4 w-full py-1 px-1 hover:cursor-pointer text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* Drop Down */}
              <dialog
                ref={modalRef}
                className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                  <h3 className="font-bold text-2xl mb-6">
                    Update Your Selection
                  </h3>

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
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyIssues;
