import React from "react";

import LanguageRepoChart from "./LangaugeRepoChart";
import RepoStarChart from "./RepoStarChart";
import RepoForkChart from "./RepoForkChart";
const Response = () => {
  return (
    <section className="response-section">
      <LanguageRepoChart />
      <RepoStarChart />
      <RepoForkChart />
    </section>
  );
};

export default Response;
