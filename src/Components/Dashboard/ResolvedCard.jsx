import React from "react";
import { FaCheckCircle, FaClipboardList } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TwoLevelPieChart from "../Stats/TotalCategory";
import TotalResolved from "../Stats/TotalResolved";

const TotalIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["totalStatus"],
    queryFn: async () => {
      const res = await axiosSecure.get("/total-status/stats");
      return res.data;
    },
  });

  return (
    <div>
      <div className="bg-secondary rounded-2xl shadow-sm border border-black/5 p-5 hover:shadow-md hover:cursor-pointer transition-all duration-300 text-accent">
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl text-accent">
            <FaCheckCircle />
          </div>
        </div>

        <h4 className="text-sm">Total Status</h4>
        <p className="text-2xl font-semibold mt-1">{stats.length}</p>
      </div>

      <TotalResolved></TotalResolved>
    </div>
  );
};

export default TotalIssues;
