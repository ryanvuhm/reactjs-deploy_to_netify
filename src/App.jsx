import logo from "./logo.svg";
// import "./App.css";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import NotFound from "./routes/NotFound/NotFound";
import { useEffect, useState } from "react";

import LeftSideMenu from "./components/LeftSideMenu/LeftSideMenu";
import Main from "./components/Main/Main";
import Dashboard from "./components/Main/components/Dashboard/Dashboard";
import People from "./components/Main/components/People/People";
import HidingMenu from "./components/HidingMenu/HidingMenu";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./features/Auth/components/Authentication/Auth";

function App() {
  const [nowrap, setWrap] = useState("");

  const isLoggedIn = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();

  const HandlePeopleClick = () => {
    console.log("success");
    setWrap("none-wrap");
  };

  return (
    <div className="App">
      <div className="container">
        <Switch>
          
          <Route path="/" component={Auth} exact />
          <Route path="/home" >

            {isLoggedIn ? <Main /> : <Redirect to="/" />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
