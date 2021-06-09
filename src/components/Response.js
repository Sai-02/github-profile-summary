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
      {/* <LanguageRepoChart />
      <RepoStarChart />
      <RepoForkChart />
      <LanguageStarChart/> */}
    </section>
  );
};

export default Response;
