import React, { Fragment } from "react";
import PropTypes from "prop-types";
import RightSideMenu from "./RightSideMenu/RightSideMenu";
import MainMenu from "./MainMenu/MainMenu";
import { Redirect, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";

Dashboard.propTypes = {};

function Dashboard(props) {
  const logged = useSelector(state => state.logged)

  const match = useRouteMatch();
  return (
    <Fragment>
      {/* <Redirect from={match.patch} to={logged}></Redirect> */}
      <MainMenu />
      <RightSideMenu />
    </Fragment>
  );
}

export default Dashboard;
