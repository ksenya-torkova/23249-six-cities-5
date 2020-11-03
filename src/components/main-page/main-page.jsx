import {connect} from 'react-redux';
import {getOffersByCity} from "../../utils";
import {mainPageTypes} from "../../prop-types";
import CardList from "../cards-list/cards-list";
import CitiesList from "../cities-list/cities-list";
import Map from "../map/map";
import NoOffers from "../no-offers/no-offers";
import React from "react";
import Sorting from '../sorting/sorting';

const MainPage = (props) => {
  const {placesAmount, offers, cities, city} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
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

      {offers.length === 0 ?
        <NoOffers
          cities = {cities}
          city = {city}
        />
        :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                cities = {cities}
                currentCity = {city}
              />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesAmount} places to stay in {city}</b>
                <Sorting />

                <CardList
                  rooms = {offers}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers = {offers}
                  className = {`cities__map`}
                  city = {city}
                />
              </div>
            </div>
          </div>
        </main>
      }
    </div>
  );
};

MainPage.propTypes = mainPageTypes;

const mapStateToProps = (({city, offers, cities}) => ({
  cities,
  city,
  offers: getOffersByCity(offers, city),
}));

export {MainPage};
export default connect(mapStateToProps)(MainPage);
