import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const AddIssues = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  const handleAddIssue = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const select = e.target.select.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const amount = e.target.amount.value;
    const status = e.target.status.value;

    fetch("http://localhost:3000/addIssues", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        category: select,
        location: location,
        description: description,
        email: email,
        imageURL: image,
        amount: amount,
        status: status,
        date: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Issue Added!",
          icon: "success",
          // draggable: true
        });
      });
      e.target.reset()
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="hero min-h-screen">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body bg-[#e7ecf9]">
              <form onSubmit={handleAddIssue} className="">
                <h1 className="text-center text-xl font-semibold mb-8">
                  Add Issue
                </h1>

                <fieldset className="fieldset grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[14px]">Issue Title</label>
                    <input
                      name="title"
                      type="text"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <fieldset className="fieldset">
                      <legend className="">Category</legend>
                      <select
                        name="select"
                        defaultValue="Select"
                        className="select bg-white/30">
                        <div className="bg-white">
                          <option>Select</option>
                          <option>Garbage</option>
                          <option>Illegal Construction</option>
                          <option>Road Damage</option>
                          <option>Broken Public Property</option>
                        </div>
                      </select>
                    </fieldset>
                    <label className="text-[14px]">Location</label>
                    <input
                      name="location"
                      type="text"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Description</label>
                    <textarea className="bg-white" name="description" id="">
                      
                    </textarea>
                    
                  </div>
                  <div>
                    <label className="text-[14px]">Email</label>
                    <input
                      readOnly
                      defaultValue={user.email}
                      name="email"
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Image</label>
                    <input
                      name="image"
                      type="text"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Amount</label>
                    <input
                      name="amount"
                      type="text"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Status</label>
                    <input
                      name="status"
                      type="text"
                      defaultValue="ongoing"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="bg-sky-950 mt-4 w-full py-1 px-4 hover:cursor-pointer text-white">
                  Add Issue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssues;
