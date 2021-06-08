import React from "react";
import { Data } from "./Hero";
import { useContext } from "react";
import Chart from "./Charts/Chart";
const LanguageStarChart = () => {
  let chartData = [];
  let { repos } = useContext(Data);
  const getLanguageStar = () => {
    let dataMap = new Map();
    repos.forEach((element) => {
      let { language, stargazers_count } = element;
      if (language != null && stargazers_count > 0) {
        dataMap.set(
          language,
          dataMap.get(language) === undefined
            ? stargazers_count
            : dataMap.get(language) + stargazers_count
        );
      }
    });
    dataMap.forEach((value, key) => {
      chartData.push({ label: key, value: value });
    });
    chartData.sort((a, b) => b.value - a.value);
    console.log(chartData);
  };
  getLanguageStar();

  return (
    <div>
      {chartData.length > 0 ? (
        <Chart
          data={chartData}
          typeOfChart="pie2d"
          caption="Most starred language"
          xAxis="Languages"
          yAxis="stars"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LanguageStarChart;
