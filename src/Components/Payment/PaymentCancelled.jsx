import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold m-5">
        Payment Cancelled. Please Try Again.
      </h2>
      <Link to="/allIssues">
        <button className="btn btn-primary mx-5">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
