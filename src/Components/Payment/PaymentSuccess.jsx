import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .post(`/payment-success?session_id=${sessionId}`)
        .then(() => {});
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl font-bold m-5">Payment Successful: {}</h2>
    </div>
  );
};

export default PaymentSuccess;
