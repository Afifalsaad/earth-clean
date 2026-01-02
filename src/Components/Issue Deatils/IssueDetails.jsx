import React, { useContext, useRef } from "react";
import { useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const IssueDetails = () => {
  const { user } = useContext(AuthContext);
  const issue = useLoaderData();
  const modalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    _id,
    title,
    images = [issue.image],
    description,
    location,
    category,
    amount,
    status = "Open",
    date = new Date().toLocaleDateString(),
  } = issue;

  const { data: contributed = [], refetch } = useQuery({
    queryKey: ["issue", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allIssues/issue/${_id}`);
      return res.data;
    },
  });

  const handleContribute = async (data) => {
    const contribution = {
      issue_id: _id,
      title: data.title,
      issueTitle: title,
      amount: data.amount,
      name: user.displayName,
      email: data.email,
      image: user.photoURL,
      phoneNumber: data.phoneNumber,
      address: data.address,
      info: data.info,
    };

    const res = await axiosSecure.post(
      "/create-checkout-session",
      contribution,
      refetch
    );
    window.location.href = res.data.url;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 bg-secondary">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <img
            src={images[0]}
            className="w-full h-[420px] object-cover rounded-xl shadow"
            alt={title}
          />
          <div className="flex gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-20 h-20 object-cover rounded-md border hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Main info */}
        <div className="space-y-4">
          <h1 className="text-3xl text-accent font-bold">{title}</h1>
          <p className="text-sm text-accent">
            {category} · {location}
          </p>

          <p className="text-accent-700">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm bg-base-200 p-4 rounded-xl">
            <span>
              <strong>Status:</strong> {status}
            </span>
            <span>
              <strong>Date:</strong> {date}
            </span>
            <span>
              <strong>Category:</strong> {category}
            </span>
            <span>
              <strong>Location:</strong> {location}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xl font-semibold text-primary">
              ৳ {amount}
            </span>
            <button
              onClick={() => modalRef.current.showModal()}
              className="btn btn-primary">
              Contribute Now
            </button>
          </div>
        </div>
      </div>

      {/* ====== OVERVIEW ====== */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-accent-700 leading-relaxed">{description}</p>
      </section>

      {/* ====== KEY INFORMATION ====== */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Key Information</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-sm">
          <li>
            <strong>Issue ID:</strong> {_id}
          </li>
          <li>
            <strong>Status:</strong> {status}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
          <li>
            <strong>Category:</strong> {category}
          </li>
        </ul>
      </section>

      {/* ====== REVIEWS / CONTRIBUTORS ====== */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Contributors ({contributed.length})
        </h2>

        <div className="overflow-x-auto border rounded-xl">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributed.map((c, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="flex items-center gap-2">
                    <img src={c.image} className="w-8 h-8 rounded-full" />
                    {c.name}
                  </td>
                  <td>৳ {c.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== RELATED (placeholder) ====== */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Related Issues</h2>
        <p className="text-sm text-accent">
          More community issues will appear here soon.
        </p>
      </section>

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-secondary">
          <h3 className="font-bold text-2xl mb-6">
            Thanks for your contribution
          </h3>

          <form onSubmit={handleSubmit(handleContribute)}>
            <fieldset className="fieldset grid grid-cols-2 gap-6">
              <div>
                <label className="label">Issue Title</label>
                <input
                  {...register("title")}
                  type="text"
                  className="input border border-black/15 mb-2"
                  placeholder="Issue title"
                />
                <label className="label mb-1">Amount</label>
                <input
                  {...register("amount", { required: "Amount is required" })}
                  type="text"
                  className="input border border-black/15 mb-2"
                  placeholder="Amount"
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amount.message}
                  </p>
                )}
                <label className="label mb-1">Name</label>
                <input
                  {...register("name")}
                  type="name"
                  className="input border border-black/15 mb-2"
                  placeholder="Name"
                />
                <label className="label mb-1">Email</label>
                <input
                  value={user.email}
                  {...register("email")}
                  type="email"
                  className="input border border-black/15 mb-2"
                />
              </div>

              <div>
                <label className="label">Phone Number</label>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  className="input border border-black/15 mb-2"
                  placeholder="Phone number"
                />
                <label className="label mb-1">Address</label>
                <input
                  {...register("address")}
                  type="text"
                  className="input border border-black/15 mb-2"
                  placeholder="address"
                />

                <label className="label mb-1">Additional info</label>
                <input
                  {...register("info")}
                  type="text"
                  className="input border border-black/15 mb-2"
                  placeholder="Additional info"
                />
              </div>
            </fieldset>

            <button
              type="submit"
              onSubmit={handleContribute}
              className="btn btn-primary mt-6 py-2 px-8 hover:cursor-pointer text-white">
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

      {/* ====== MODAL ====== */}
      {/* <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Contribute to this Issue</h3>
          <form onSubmit={handleSubmit(handleContribute)} className="space-y-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              {...register("amount")}
              placeholder="Amount"
              className="input input-bordered w-full"
            />
            <textarea
              {...register("info")}
              placeholder="Additional Info"
              className="textarea textarea-bordered w-full"
            />

            <button className="btn btn-primary w-full">Proceed to Pay</button>
          </form>

          <form method="dialog" className="mt-4 text-center">
            <button className="btn btn-ghost">Close</button>
          </form>
        </div>
      </dialog> */}
    </div>
  );
};

export default IssueDetails;
