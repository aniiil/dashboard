import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

const Chart = () => {
  return (
    <>
      <div>
        <h1 className="title_line my-3 text-center ">Line Chart</h1>
        <ResponsiveContainer className="" aspect={1}>
          <LineChart
            width={400}
            height={400}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data={pdata}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="student"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="fees"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Chart;
