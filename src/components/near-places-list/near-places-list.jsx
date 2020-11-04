import {nearPlacesListTypes} from "../../prop-types";
import NearPlaceCard from "../near-places-card/near-places-card";
import React from "react";

const NearPlacesList = (props) => {
  const {rooms} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {rooms.map((room) => (
          <NearPlaceCard
            cardData = {room}
            key = {room.id}
          />
        ))
        }

      </div>
    </section>
  );
};

NearPlacesList.propTypes = nearPlacesListTypes;

export default NearPlacesList;
