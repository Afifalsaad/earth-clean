import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from "react-router";

const AddIssues = () => {
  const { user } = use(AuthContext);
//   console.log(user);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body bg-[#e7ecf9]">
              <form className="">
                <h1 className="text-center text-xl font-semibold mb-8">
                  Add Issue
                </h1>
                <fieldset className="fieldset grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[14px]">Issue Title</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Category</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Location</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Description</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                  </div>
                  <div>
                    <label className="text-[14px]">Image</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Amount</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Status</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                    <label className="text-[14px]">Date</label>
                    <input
                      type="email"
                      className="my-1 p-1 border border-black/10 bg-white/30"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssues;
