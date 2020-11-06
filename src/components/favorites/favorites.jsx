import {connect} from 'react-redux';
import {favoriteTypes} from "../../prop-types";
import {nanoid} from "nanoid";
import FavoritesLocationsItem from "../favorites-locations-item/favorites-locations-item";
import React from "react";

const Favorites = (props) => {
  const {offers} = props;

  const favoritesOffers = offers.filter((offer) => offer.isBookmarked === true);
  let cities = new Set();

  favoritesOffers.forEach((favoritesOffer) => {
    cities.add(favoritesOffer.city);
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="index.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = favoriteTypes;

const mapStateToProps = (({offers}) => ({
  offers,
}));

export {Favorites};
export default connect(mapStateToProps)(Favorites);
