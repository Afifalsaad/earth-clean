import React from "react";
import TotalAmount from "./TotalAmount";
import ResolvedCard from "./ResolvedCard";
import TotalIssues from "./TotalIssues";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const DashboardHome = () => {
    const { data: stats = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
          const res = await useAxiosSecure.get("/total-issues/stats");
          console.log(res.data);
          return res.data;
        },
      });
  return (
    <div>
      <h2>Dashboard Home</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <TotalIssues></TotalIssues>
        <ResolvedCard></ResolvedCard>
        <TotalAmount></TotalAmount>
      </div>
    </div>
  );
};

export default DashboardHome;
