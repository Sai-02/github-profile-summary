import React from "react";
import { useContext } from "react";
import Chart from "./Charts/Chart";
import { Data } from "./Hero";

const LangaugeRepoChart = () => {
  const { repos } = useContext(Data);
  let charData = [];

  const getLanguageInfo = () => {
    let dataMap = new Map();
    repos.forEach((element) => {
      let { language } = element;
      if (language != null) {
        dataMap.set(
          language,
          dataMap.get(language) === undefined ? 1 : dataMap.get(language) + 1
        );
      }
    });

    dataMap.forEach((value, key) => {
      charData.push({ label: key, value: value });
    });
    charData.sort((a, b) => b.value - a.value);
    return charData;
  };
  getLanguageInfo();

  return (
    <div>
      {charData.length > 0 ? (
        <Chart
          data={charData}
          typeOfChart="column3d"
          caption="Most used Languages"
          xAxis="Languages"
          yAxis="Repositories"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LangaugeRepoChart;
