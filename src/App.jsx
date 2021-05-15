import { useState } from "react";
import { useDispatch } from "react-redux";
// import "./App.css";
import { Route, Switch } from "react-router";
import Main from "./components/Main/Main";
import Auth from "./features/Auth/components/Authentication/Auth";
import NotFound from "./routes/NotFound/NotFound";

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
          <Route path="/home" component={Main}>
            {/* {isLoggedIn ? <Main /> : <Redirect to="/" />} */}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
