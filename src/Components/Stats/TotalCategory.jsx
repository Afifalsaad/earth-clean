import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

export default function TwoLevelPieChart({ isAnimationActive = true }) {
  const axiosSecure = useAxiosSecure();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/total-issues/stats").then((res) => {
      const formatted = res.data.map((item) => ({
        name: item._id,
        value: item.count,
      }));
      setCategoryData(formatted);
    });
  }, [axiosSecure]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            name="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#82ca9d"
            label
            isAnimationActive={isAnimationActive}
          />
          <Tooltip></Tooltip>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
