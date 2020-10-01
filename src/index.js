import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  PLACES_AMOUNT: 312,
};

ReactDOM.render(
    <App placesAmount = {Settings.PLACES_AMOUNT} />,
    document.querySelector(`#root`)
);
