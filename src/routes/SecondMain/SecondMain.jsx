import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// SecondMain.propTypes = {

// };

export const SecondMain = props => {
  return (
    <div>
      <p>
        <Link to="/">Go Back To HomePage</Link>
      </p>
      Second Main
    </div>
  );
};
