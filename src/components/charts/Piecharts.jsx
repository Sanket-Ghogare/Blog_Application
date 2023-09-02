import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Music", 11],
  ["Movies", 4],
  ["Sports", 8],
  ["Tech", 9],
  ["Fashion", 2], // CSS-style declaration
];

export const options = {
  title: "Categories of Blog",
  pieHole: 0.4,
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}