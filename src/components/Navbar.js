import React from "react";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className={`${classes.title}`}>
          <span
            onClick={() => window.location.reload()}
            className="navbar-h6-span"
          >
            Github Summary
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
