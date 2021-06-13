import React from "react";
import { useContext } from "react";
import Chart from "./Charts/Chart";
import { Data } from "./Hero";

const RepoForkChart = () => {
  let chartData = [];
  let { repos } = useContext(Data);
  const getRepoFork = () => {
    repos.forEach((repo) => {
      if (repo.forks_count > 0) {
        chartData.push({ label: repo.name, value: repo.forks_count });
      }
    });
    chartData.sort((a, b) => b.value - a.value);
  };
  getRepoFork();
  return (
    <>
      {chartData.length > 0 ? (
        <div className="chart-container">
          <Chart
            data={chartData}
            typeOfChart="column2d"
            caption="Most forked repos"
            xAxis="Repo name"
            yAxis="forks"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RepoForkChart;
