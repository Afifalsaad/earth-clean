import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

export default function TotalAmount({ isAnimationActive = true }) {
  const axiosSecure = useAxiosSecure();
  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/total-amount/stats").then((res) => {
      const formatted = res.data.map((item) => ({
        name: item._id,
        value: item.count,
      }));
      setResolvedData(formatted);
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
            data={resolvedData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="50%"
            fill="#8884d8"
            isAnimationActive={isAnimationActive}
          />
          <Tooltip></Tooltip>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
