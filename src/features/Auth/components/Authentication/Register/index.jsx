import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
// import { register } from "../../../Candidate/CandidateSlice";
import { auth } from "../../../../../firebaseConntect";
import { register } from "../../../../Candidate/CandidateSlice";
import RegisterForm from "../RegisterForm/RegisterForm";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const HandleSubmit = async (values) => {
    try {


      auth.createUserWithEmailAndPassword(values.email,values.password)

      

      
    } catch (errors) {
      console.log("Fail to register", errors);
    }
    setloading(false)
  };
  return (
    <div>
      <RegisterForm onSubmit={HandleSubmit} loading={loading} />
    </div>
  );
}

export default Register;
