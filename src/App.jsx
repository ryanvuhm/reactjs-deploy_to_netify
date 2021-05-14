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


function App() {


  const [nowrap, setWrap] = useState("");

  const isLoggedIn = useSelector(state=> state.loading)
  const dispatch = useDispatch();

  const HandlePeopleClick = () => {
    console.log("success");
    setWrap("none-wrap");
  };



  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="container__base">
          <HidingMenu />
          <div
            className={`container__base__content ${nowrap}`}
            id="base-content"
          >
            <LeftSideMenu peopleClick={HandlePeopleClick} />
            <Switch>


              <Route path="/" component={Main} exact />

              <Route path="/home"  >
                {isLoggedIn
                  ? <Dashboard />
                  : <Redirect to="/" />}
              </Route>

              <Route path="/people" >
                {isLoggedIn
                  ? <People />
                  : <Redirect to="/" />}
              </Route>


              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
