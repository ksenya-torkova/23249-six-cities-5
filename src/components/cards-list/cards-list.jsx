import {cardListTypes} from "../../prop-types";
import CitiesPlaceCard from "../cities-place-card/cities-place-card";
import React from "react";

const CardList = (props) => {
  const {rooms} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {rooms.map((room) => (
        <CitiesPlaceCard
          cardData = {room}
          key = {room.id}
        />
      ))}
    </div>
  );
};

CardList.propTypes = cardListTypes;

export {CardList};
export default React.memo(CardList);
