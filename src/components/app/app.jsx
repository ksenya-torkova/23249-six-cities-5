import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {placesAmount} = props;

  return (
    <MainPage placesAmount = {placesAmount} />
  );
};

App.propTypes = {
  placesAmount: PropTypes.number.isRequired,
};

export default App;
