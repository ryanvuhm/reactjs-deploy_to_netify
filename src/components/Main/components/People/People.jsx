import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MainMenu from "./MainMenu/MainMenu";
import RightSideMenu from "./RightSideMenu/RightSideMenu";

People.propTypes = {};

function People(props) {
  return (
    <Fragment>
      <MainMenu />
      <RightSideMenu />
    </Fragment>
  );
}

export default People;
