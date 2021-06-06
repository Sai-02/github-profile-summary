import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Response from "./Response";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Data = React.createContext();
const Hero = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${input}`)
      .then((response) => response.data)
      .then((response) => {
        setResponse(response);
        return response;
      })
      .then((response) => {
        getRepos(response);
        getFollowers(response);
        setIsLoading(false);
        setIsSearched(true);
      })
      .then(() => {
        history.push(`${input}`);
      })
      .catch((e) => {
        console.log(e, "here is an error");
        setIsLoading(false);
        setIsError(true);
        return;
      });
  };
  useEffect(() => {
    history.push("");
  }, []);
  const getRepos = async ({ repos_url }) => {
    let repoList = await (await axios.get(repos_url)).data;
    setRepos(repoList);
  };
  const getFollowers = async ({ followers_url }) => {
    let followersList = await (await axios.get(followers_url)).data;
    setFollowers(followersList);
  };

  if (isLoading) {
    return (
      <section className="hero">
        <div className="hero-search-page">
          <div className="hero-loading-section">
            <CircularProgress className="hero-loading" size={"4rem"} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <Router>
      <section className="hero">
        {!isSearched ? (
          <div className="hero-search-page">
            {isError ? (
              <Alert
                className="hero-error-alert"
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setIsError(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Enter valid user name
              </Alert>
            ) : (
              <div className="space-filler"></div>
            )}

            <form className="hero-form" onSubmit={handleSubmit}>
              <Input
                inputProps={{ "aria-label": "description" }}
                placeholder="Enter your username"
                className="hero-username-input"
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <div className="hero-btn-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <Data.Provider
            value={
              (response,
              followers,
              repos,
              setResponse,
              setFollowers,
              setRepos,
              input,
              setInput,
              handleSubmit)
            }
          >
            <Route path="/react" component={Response} />
            <Response />
          </Data.Provider>
        )}
      </section>
    </Router>
  );
};

export default Hero;
