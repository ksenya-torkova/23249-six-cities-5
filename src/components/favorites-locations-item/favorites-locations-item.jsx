import {favoritesLocationsItemTypes} from "../../prop-types";
import FavoritesCardsList from "../favorites-cards-list/favorites-cards-list";
import React from "react";

const FavoritesLocationsItem = (props) => {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesCardsList
          city = {city}
          offers = {offers}
        />
      </div>
    </li>
  );
};

FavoritesLocationsItem.propTypes = favoritesLocationsItemTypes;

export default FavoritesLocationsItem;
