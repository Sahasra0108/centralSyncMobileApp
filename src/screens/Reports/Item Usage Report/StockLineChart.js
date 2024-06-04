import React, { useState, useEffect } from "react";
import { Text, Dimensions } from "react-native";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(92, 153, 142, ${opacity})`,
  barPercentage: 0.5,
};

const StockLineChart = ({ category, year }) => {
 

  const data = {
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 26, 200, 80, 73, 25],
        // data: {sumByMonthSI},
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [50, 150, 10, 60, 20, 43, 50, 50, 150, 5, 200, 80],
        // data: {sumByMonthSI},
        color: (opacity = 1) => `rgba(150, 65, 20, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      bezier
    />
  );
};

export default StockLineChart;
