import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CodeIcon from "@material-ui/icons/Code";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { useState } from "react";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";
import { Box, Menu, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle } from "@material-ui/icons";

import {  status } from "../../features/Counter/LoggedSlice";
import { auth } from "../../firebaseConntect";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
}));

const MODE = {
  LOGIN: "Login",
  REGISTER: "Register"
};

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const isLoggedIn = useSelector(state => state.loading);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickLogout = () => {


    const back = status(false);
    dispatch(back);
    auth.signOut();

    history.replace("/");
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/home">
              Home
            </Link>
          </Typography>

          {isLoggedIn
            ? <IconButton color="inherit" onClick={handleClickMenu}>
                <AccountCircle />
              </IconButton>
            : <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>}
        </Toolbar>
      </AppBar>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
      <Dialog
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          {mode === MODE.REGISTER &&
            <React.Fragment>
              <Register />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an acccount . Login here
                </Button>
              </Box>
            </React.Fragment>}

          {mode === MODE.LOGIN &&
            <React.Fragment>
              <Login />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an acccount . Register here
                </Button>
              </Box>
            </React.Fragment>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
