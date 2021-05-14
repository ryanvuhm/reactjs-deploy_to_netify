import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../routes/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import People from "./components/People/People";
import Header from "../Header/Header";
import HidingMenu from "../HidingMenu/HidingMenu";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../features/Auth/components/Authentication/Auth";

Main.propTypes = {};

function Main(props) {
  const [nowrap, setWrap] = useState("");

  // const isLoggedIn = useSelector(state => state.loading);
  // const dispatch = useDispatch();
  const isLoggedIn = JSON.parse(localStorage.getItem("token"));
  const HandlePeopleClick = () => {
    console.log("success");
    setWrap("none-wrap");
  };
  const match = useRouteMatch();
  console.log(match.path);
  console.log("hello");
  return (
    <Fragment>
      {/* <Switch>
        <Route path={match.path} component={Dashboard} />
        <Route path ={`${match.path}/people`} component={People} />
        <Route component={NotFound} />
      </Switch> */}

      <Header />
      <div className="container__base">
        <HidingMenu />
        <div className={`container__base__content ${nowrap}`} id="base-content">
          <LeftSideMenu peopleClick={HandlePeopleClick} />
          <Switch>
            
            <Route path="/home/dashboard">
              {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
            </Route>

            <Route path="/home/people">
              {isLoggedIn ? <People /> : <Redirect to="/" />}
            </Route>

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
