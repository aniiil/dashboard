import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const PieComponent = () => {
  return (
    <>
      <div>
        <h1 className="title_pie my-3 text-center">Pie Chart</h1>
        <ResponsiveContainer width="100%" aspect={1}>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default PieComponent;
