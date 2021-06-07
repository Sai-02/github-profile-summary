import React from "react";

import LanguageRepoChart from "./LangaugeRepoChart";
import RepoStarChart from "./RepoStarChart";

const Response = () => {
  return (
    <section className="response-section">
      <LanguageRepoChart />
      <RepoStarChart />
    </section>
  );
};

export default Response;
