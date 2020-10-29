import {generateReviewsList} from "./mocks/reviews";
import {getRandomInteger} from "./utils";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const Settings = {
  PLACES_AMOUNT: 312,
  MAIN_ROOMS_AMOUNT: 5,
  NEAR_PLACES_AMOUNT: 3,
  FAVORITES_PLACES_AMOUNT: 3,
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store = {store}>
      <App
        placesAmount = {Settings.PLACES_AMOUNT}
        reviews = {generateReviewsList(getRandomInteger(1, 5))}
      />
    </Provider>,
    document.querySelector(`#root`)
);
