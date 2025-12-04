import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const IssueDetails = () => {
  const issues = useLoaderData();
  const modalRef = useRef();
  const { user } = use(AuthContext);
  const { title, image, location, description, category, amount, _id } = issues;
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const { data: contributed = [] } = useQuery({
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
      contribution
    );
    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center gap-6 p-3 lg:p-12">
        <div>
          <img
            className="min-w-8/12 md:min-w-[400px] min-h-[500px] object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h2 className="font-semibold">{location}</h2>
          <p>{category}</p>

          <p>Amount: {amount} tk</p>
          <p className="mb-7">Date: {new Date().toLocaleDateString()}</p>
          <h2>{description}</h2>
          <button
            onClick={handleModal}
            className="bg-sky-950 mt-6 py-2 px-8 hover:cursor-pointer text-white">
            Pay Clean-Up Contribution
          </button>

          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white">
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
                      {...register("amount")}
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="Amount"
                    />
                    <label className="label mb-1">Name</label>
                    <input
                      {...register("name")}
                      type="name"
                      className="input border border-black/15 mb-2"
                      placeholder="Name"
                    />
                    <label className="label mb-1">Email</label>
                    <input
                      defaultValue={user.email}
                      {...register("email")}
                      type="email"
                      className="input border border-black/15 mb-2"
                      placeholder="Email"
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
                  className="btn bg-sky-700 mt-6 py-2 px-8 hover:cursor-pointer text-white">
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

      <h3 className="p-4 text-shadow-sky-90000 text-2xl font-bold max-w-6xl mx-auto">
        Pays for this Product:{" "}
        <span className="text-sky-600">{contributed.length}</span>
      </h3>
      {/* Contributor */}
      <div className="overflow-x-auto bg-white/50 max-w-6xl mx-auto mb-14">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Contributed amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {contributed.map((c, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={c.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {c.name}
                  <br />
                </td>
                <td>{c.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueDetails;
