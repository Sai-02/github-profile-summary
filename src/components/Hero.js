import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Hero = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") return;
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${input}`)
      .then((response) => response.data)
      .then((response) => setResponse(response))
      .catch((e) => {
        console.log(e, "here is an error");
        setIsLoading(false);
        setIsError(true);
      });

    console.log(input);
  };

  if (isLoading) {
    return (
      <section className="hero">
        <div className="hero-loading-section">
          <CircularProgress className="hero-loading" size={"4rem"} />
        </div>
      </section>
    );
  }
  return (
    <section className="hero">
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
        />
        <div className="hero-btn-container">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
