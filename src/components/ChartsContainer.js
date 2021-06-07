import React from "react";
import { useContext } from "react";
import PieChart from "./Charts/PieChart";
import { Data } from "./Hero";

const ChartsContainer = () => {
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
    console.log(dataMap);
    dataMap.forEach((value, key) => {
      charData.push({ label: key, value: value });
    });
    charData.sort((a, b) => b.value - a.value);
    return charData;
  };
  getLanguageInfo();

  return <div>{charData.length > 0 ? <PieChart data={charData} /> : ""}</div>;
};

export default ChartsContainer;
