import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const IssueDetails = () => {
  const issues = useLoaderData();
  const modalRef = useRef();
  const { user } = use(AuthContext);
  const [contributed, setContributed] = useState([]);
  const { title, image, location, description, category, amount, _id } = issues;

  const handleModal = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    fetch(`http://localhost:3000/allIssues/issue/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setContributed(data);
      });
  }, [_id]);

  const handleContribute = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(user);

    const title = form.title.value;
    const amount = form.amount.value;
    const name = user.displayName;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const info = form.info.value;
    const contribution = {
      product_id: _id,
      title: title,
      amount: amount,
      name: name,
      email: email,
      image: user.photoURL,
      phoneNumber: phoneNumber,
      address: address,
      info: info,
      date: new Date(),
    };

    fetch("http://localhost:3000/contribution", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contribution),
    })
      .then((res) => res.json())
      .then(() => {
        modalRef.current.close();
        Swal.fire({
          title: "Thanks for your contribution!",
          icon: "success",
        });
        setContributed((data) => [...data, contribution]);
      });
    form.reset();
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
        <div className="">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h2 className="font-semibold">{location}</h2>
          <p>{category}</p>

          <p className="mb-7">Amount: {amount} tk</p>
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

              <form onSubmit={handleContribute}>
                <fieldset className="fieldset grid grid-cols-2 gap-6">
                  <div>
                    <label className="label">Issue Title</label>
                    <input
                      name="title"
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="Issue title"
                    />
                    <label className="label mb-1">Amount</label>
                    <input
                      name="amount"
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="Amount"
                    />
                    <label className="label mb-1">Name</label>
                    <input
                      name="name"
                      type="name"
                      className="input border border-black/15 mb-2"
                      placeholder="Name"
                    />
                    <label className="label mb-1">Email</label>
                    <input
                      defaultValue={user.email}
                      name="email"
                      type="email"
                      className="input border border-black/15 mb-2"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label className="label">Phone Number</label>
                    <input
                      name="phoneNumber"
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="Phone number"
                    />
                    <label className="label mb-1">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="address"
                    />

                    <label className="label mb-1">Additional info</label>
                    <input
                      name="info"
                      type="text"
                      className="input border border-black/15 mb-2"
                      placeholder="Additional info"
                    />
                  </div>
                </fieldset>

                <button
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
        Bids for this Product:{" "}
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
              <tr>
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
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueDetails;
