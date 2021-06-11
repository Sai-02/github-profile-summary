import React from "react";
import UserInfo from "./UserInfo";
import LanguageRepoChart from "./LangaugeRepoChart";
import RepoStarChart from "./RepoStarChart";
import RepoForkChart from "./RepoForkChart";
import LanguageStarChart from "./LanguageStarChart";
const Response = () => {
  return (
    <section className="response-section">
      <UserInfo />
      <div className="charts-container">
        <LanguageRepoChart className="Charts" />
        <RepoStarChart className="Charts" />
        <RepoForkChart className="Charts" />
        <LanguageStarChart className="Charts" />
      </div>
    </section>
  );
};

export default Response;
