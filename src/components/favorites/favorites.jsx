import {favoriteTypes} from "../../prop-types";
import {nanoid} from "nanoid";
import FavoritesLocationsItem from "../favorites-locations-item/favorites-locations-item";
import MainFooter from "../main-footer/main-footer";
import MainHeader from "../main-header/main-header";
import React from "react";

const Favorites = (props) => {
  const {offers} = props;
  const favoritesOffers = offers.filter((offer) => offer.isBookmark === true);
  let cities = new Set();

  favoritesOffers.forEach((favoritesOffer) => {
    cities.add(favoritesOffer.city);
  });

  return (
    <div className="page">
      <MainHeader
        isMainPage = {false}
      />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(cities).map((city) => (
                <FavoritesLocationsItem
                  city = {city}
                  key = {nanoid()}
                  offers = {favoritesOffers}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>

      <MainFooter />
    </div>
  );
};

Favorites.propTypes = favoriteTypes;

export default React.memo(Favorites);
