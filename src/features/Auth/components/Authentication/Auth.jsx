import React, { useState } from "react";
import PropTypes from "prop-types";
import Register from "./Register";
import Login from "./Login";
import { Box, Button } from "@material-ui/core";

Auth.propTypes = {};
const MODE = {
  LOGIN: "Login",
  REGISTER: "Register"
};
function Auth(props) {
  const [mode, setMode] = useState(MODE.LOGIN);
  return (
    <div>
      {mode === MODE.REGISTER &&
        <React.Fragment>
          <Register />

          <Box textAlign="center">
            <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
              Already have an acccount . Login here
            </Button>
          </Box>
        </React.Fragment>}

      {mode === MODE.LOGIN &&
        <React.Fragment>
          <Login />

          <Box textAlign="center">
            <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
              Don't have an acccount . Register here
            </Button>
          </Box>
        </React.Fragment>}
    </div>
  );
}

export default Auth;
