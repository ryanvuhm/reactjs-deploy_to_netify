import React from "react";
import PropTypes from "prop-types";
// import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";

import LoginForm from "../LoginForm";
import { logged, status } from "../../../Counter/LoggedSlice";
import { useHistory } from "react-router";
import { auth } from "../../../../firebaseConntect";



Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const HandleSubmit = async values => {
    try {



      await auth.signInWithEmailAndPassword(values.identifier,values.password);

      const loggedIn = status();

      dispatch(loggedIn);
      

      history.replace("/home")
      console.log("success")
     
    } catch (errors) {
      console.log("Fail to login", errors);
    }
  };
  return (
    <div>
      <LoginForm onSubmit={HandleSubmit} />
    </div>
  );
}

export default Login;
