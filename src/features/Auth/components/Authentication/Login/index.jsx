import React from "react";
import PropTypes from "prop-types";
// import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";

import { logged, status } from "../../../../Counter/LoggedSlice";
import { useHistory } from "react-router";
// import { auth } from "../../../../firebaseConntect";

import { auth } from "../../../../../firebaseConntect";
import SignIn from "../SignIn/SignInForm";



Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const HandleSubmit = async values => {
    try {



      await auth.signInWithEmailAndPassword(values.identifier,values.password);

      const loggedIn = status();

      dispatch(loggedIn);
      

       localStorage.setItem("token",JSON.stringify("token"))
      history.replace("/home")
      console.log("success")
     
    } catch (errors) {
      console.log("Fail to login", errors);
    }
  };
  return (
    <div>
      <SignIn onSubmit={HandleSubmit} />
    </div>
  );
}

export default Login;
