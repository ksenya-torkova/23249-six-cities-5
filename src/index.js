import {generateReviewsList} from "./mocks/reviews";
import {generateRoomsList} from "./mocks/offer";
import {getRandomInteger} from "./utils";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";

const Settings = {
  PLACES_AMOUNT: 312,
  MAIN_ROOMS_AMOUNT: 5,
  NEAR_PLACES_AMOUNT: 3,
  FAVORITES_PLACES_AMOUNT: 3,
};

ReactDOM.render(
    <App
      favoritePlaces = {generateRoomsList(Settings.FAVORITES_PLACES_AMOUNT)}
      mainRooms = {generateRoomsList(Settings.MAIN_ROOMS_AMOUNT)}
      otherPlaces = {generateRoomsList(Settings.NEAR_PLACES_AMOUNT)}
      placesAmount = {Settings.PLACES_AMOUNT}
      reviews = {generateReviewsList(getRandomInteger(1, 5))}
    />,
    document.querySelector(`#root`)
);
