import React from "react";
import { FaClipboardList } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TwoLevelPieChart from "../Stats/TotalCategory";

const TotalIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get("/total-issues/stats");
      return res.data;
    },
  });

  return (
    <div>
      <div className="bg-secondary rounded-2xl shadow-sm border border-black/5 p-5 hover:shadow-md hover:cursor-pointer transition-all duration-300 text-accent">
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl text-accent">
            <FaClipboardList />
          </div>
        </div>

        <h4 className="text-sm">Total Category</h4>
        <p className="text-2xl font-semibold mt-1">{stats.length}</p>
      </div>

      <TwoLevelPieChart></TwoLevelPieChart>
    </div>
  );
};

export default TotalIssues;
