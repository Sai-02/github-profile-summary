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
  };
  getRepoStar();

  return (
    <>
      {chartData.length > 0 ? (
        <div className="chart-container">
          <Chart
            data={chartData}
            typeOfChart="doughnut3d"
            caption="Most starred repos"
            xAxis="Repo name"
            yAxis="stars"
            // className="chart"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RepoStarChart;
