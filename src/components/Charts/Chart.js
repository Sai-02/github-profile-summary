// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class PieChart extends React.Component {
//   chartConfigs.dataSource.data=data;
//   render() {
//     return <ReactFC {...chartConfigs} />;
//   }
// }
const Chart = ({ data, typeOfChart, caption, yAxis, xAxis }) => {
  const chartConfigs = {
    type: typeOfChart, // The chart type
    width: "80%", // Width of the chart
    height: "80%", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: caption,
        //Set the chart subcaption
        subCaption: "",
        //Set the x-axis name
        xAxisName: xAxis,
        //Set the y-axis name
        yAxisName: yAxis,
        numberSuffix: "",
        //Set the theme for your chart
        theme: "fusion",
        decimals: 0,
      },

      // Chart Data
      data: data.slice(0,5),
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
