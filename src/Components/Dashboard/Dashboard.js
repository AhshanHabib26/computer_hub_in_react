import React from "react";
import './Dashboard.css'
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      id: 2,
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      id: 3,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      id: 4,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      id: 5,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      id: 6,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="data_chart_container">
      <div className="monthley_sell_container">
          <h1>Investment Vs Sell</h1>
        <LineChart
          width={820}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={"month"} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            name="Investment"
            type="monotone"
            dataKey={"investment"}
            stroke="#8884d8"
          />
          <Line name="Sell" type="monotone" dataKey={"sell"} stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="investment_revenue">
          <h1>Investment Vs Revenue</h1>
        <BarChart width={820} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"data"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"investment"} fill="#8884d8" />
          <Bar dataKey={"revenue"} fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
