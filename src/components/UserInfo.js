import React from "react";
import { Data } from "./Hero";
import { useContext } from "react";
import RepoIcon from "./../images/iconfinder_298860_repo_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faUserPlus,
  faCode,
  faMapMarker,
  faBuilding,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
  let { response, followers } = useContext(Data);
  console.log(response, followers);
  return (
    <div className="user-info">
      <ul className="user-stats-list">
        <li className="user-stats-list-item">
          <div className="icon-section">
            <div className="icon-container">
              <img src={RepoIcon} alt="" />
            </div>
          </div>
          <div className="info-section">
            <span className="value">{response.public_repos}</span>
            <span>Repositories</span>
          </div>
        </li>
        <li className="user-stats-list-item">
          <div className="icon-section">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
          </div>
          <div className="info-section">
            <span className="value">{response.followers}</span>
            <span>Followers</span>
          </div>
        </li>
        <li className="user-stats-list-item">
          <div className="icon-section">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
          </div>
          <div className="info-section">
            <span className="value">{response.following}</span>
            <span>Following</span>
          </div>
        </li>
        <li className="user-stats-list-item">
          <div className="icon-section">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCode} />
            </div>
          </div>
          <div className="info-section">
            <span className="value">{response.public_gists}</span>
            <span>Gists</span>
          </div>
        </li>
      </ul>
      <div className="user-profile-section">
        <article className="user-profile-user-info">
          <div className="name-image">
            <div className="img-container">
              <img src={response.avatar_url} alt="" />
            </div>
            <h3>{response.name}</h3>
          </div>
          <div className="bio-section">
            <p>{response.bio}</p>
            <ul className="bio-list">
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                {response.location}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
                {response.company === null ? "null" : response.company}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <a
                  href={response.blog === "" ? "#" : "https://" + response.blog}
                  target="_blank"
                >
                  {response.blog === "" ? "null" : response.blog}
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="user-followers">
          <h2>Followers</h2>
          <ul className="followers-list">
            {followers.map((follower) => {
              return (
                <li key={follower.id}>
                  <div className="follower-img-container">
                    <img src={follower.avatar_url} alt="" />
                  </div>
                  <div className="follower-info-section">
                    <span>{follower.login}</span>
                    <a href={follower.html_url} target="_blank">
                      {follower.html_url}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default UserInfo;
