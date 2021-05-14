import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../routes/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import People from "./components/People/People";

Main.propTypes = {};

function Main(props) {

    const match = useRouteMatch();
    console.log(match.path)
    console.log("hello")
  return (
    <Fragment>
      Main
      {/* <Switch>
        <Route path={match.path} component={Dashboard} />
        <Route path ={`${match.path}/people`} component={People} />
        <Route component={NotFound} />
      </Switch> */}

      
    </Fragment>
  );
}

export default Main;
