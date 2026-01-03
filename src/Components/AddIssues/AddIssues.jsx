import React from "react";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import UseAuth from "../Context/UseAuth";

const AddIssues = () => {
  const { user } = UseAuth();

  const handleAddIssue = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const select = e.target.category.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const amount = e.target.amount.value;
    const status = e.target.status.value;

    fetch("https://assignment-10-server-jet-nine.vercel.app/addIssues", {
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
      .then(() => {
        Swal.fire({
          title: "Issue Added!",
          icon: "success",

          // draggable: true
        });
      });
    e.target.reset();
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div
        className="min-h-screen flex items-center justify-center 
        bg-secondary p-4 transition-colors">
        <div className="w-full max-w-3xl bg-base-200 rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            Post a New Issue
          </h2>

          <form
            onSubmit={handleAddIssue}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Issue Title
                </label>
                <input
                  name="title"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  required
                  className="select select-bordered w-full">
                  <option value="">Select Category</option>
                  <option>Garbage</option>
                  <option>Illegal Construction</option>
                  <option>Road Damage</option>
                  <option>Broken Public Property</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  name="location"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  className="textarea textarea-bordered w-full"
                />
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  readOnly
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Image URL
                </label>
                <input name="image" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  name="amount"
                  type="number"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select name="status" className="select select-bordered w-full">
                  <option value="ongoing">Ongoing</option>
                  <option value="ended">Ended</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="btn btn-primary w-full text-lg">
                Submit Issue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIssues;
