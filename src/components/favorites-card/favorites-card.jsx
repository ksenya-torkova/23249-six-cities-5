import {favoritesCardTypes} from "../../prop-types";
import PlaceCard from "../place-card/place-card";
import React from "react";

const FavoritesCard = (props) => {
  const {cardData} = props;

  return (
    <PlaceCard
      additionalCardClass = {`favorites__card`}
      additionalImageClass = {`favorites__image-wrapper`}
      additionalContentClass = {`favorites__card-info`}
      cardData = {cardData}
      onMouseEnter = {() => {}}
      onMouseLeave = {() => {}}
    />
  );
};

FavoritesCard.propTypes = favoritesCardTypes;

export {FavoritesCard};
export default React.memo(FavoritesCard);
