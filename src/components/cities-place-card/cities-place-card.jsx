
import {citiesPlaceCardTypes} from "../../prop-types";
import PlaceCard from "../place-card/place-card";
import React from "react";

const CitiesPlaceCard = (props) => {
  const {cardData, onMouseEnter} = props;

  return (
    <PlaceCard
      additionalCardClass = {`cities__place-card`}
      additionalImageClass = {`cities__image-wrapper`}
      additionalContentClass = {``}
      cardData = {cardData}
      onMouseEnter = {onMouseEnter}
    />
  );
};

CitiesPlaceCard.propTypes = citiesPlaceCardTypes;

export default CitiesPlaceCard;
