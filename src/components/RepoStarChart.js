import React from "react";
import { useContext } from "react";
import Chart from "./Charts/Chart";
import { Data } from "./Hero";
const RepoStarChart = () => {
  let chartData = [];
  let { repos } = useContext(Data);
  const getRepoStar = () => {
    repos.forEach((repo) => {
      if (repo.stargazers_count > 0) {
        chartData.push({ label: repo.name, value: repo.stargazers_count });
      }
    });
    chartData.sort((a, b) => b.value - a.value);
    console.log(chartData);
  };
  getRepoStar();

  return (
    <div>
      {chartData.length > 0 ? (
        <Chart
          data={chartData}
          typeOfChart="doughnut3d"
          caption="Most starred repos"
          xAxis="Repo name"
          yAxis="stars"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RepoStarChart;
