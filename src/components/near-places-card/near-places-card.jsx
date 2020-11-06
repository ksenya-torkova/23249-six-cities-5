import PlaceCard from "../place-card/place-card";
import React from "react";
import {nearPlaceCard} from "../../prop-types";

const NearPlaceCard = (props) => {
  const {cardData} = props;

  return (
    <PlaceCard
      additionalCardClass = {`near-places__card`}
      additionalImageClass = {`near-places__image-wrapper`}
      additionalContentClass = {``}
      cardData = {cardData}
      onMouseEnter = {() => {}}
      onMouseLeave = {() => {}}
    />
  );
};

NearPlaceCard.propTypes = nearPlaceCard;

export default NearPlaceCard;
