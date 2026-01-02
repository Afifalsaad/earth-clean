import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentSuccess = () => {
  const [payment, setPayment] = useState({});
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .post(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPayment({
            transactionId: res.data.transactionId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen bg-secondary text-accent p-5">
      <h2 className="text-2xl font-bold">Payment Successful!</h2>
      <p>Transaction ID: {payment.transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
