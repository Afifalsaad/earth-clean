import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TotalResolved from "../Stats/TotalResolved";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import TotalAmount from "../Stats/TotalAmount";

const TotalIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["totalAmount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/total-amount/stats");
      console.log("from total amount card", res.data);
      return res.data;
    },
  });

  const totalAmount = stats.reduce((acc, item) => acc + (item._id || 0), 0);

  return (
    <div>
      <div className="bg-secondary rounded-2xl shadow-sm border border-accent/10 p-5 hover:shadow-md hover:cursor-pointer transition-all duration-300 text-accent">
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl text-accent">
            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
          </div>
        </div>

        <h4 className="text-sm">Amount</h4>
        <p className="text-2xl font-semibold mt-1">{totalAmount}</p>
      </div>

      <TotalAmount></TotalAmount>
    </div>
  );
};

export default TotalIssues;
