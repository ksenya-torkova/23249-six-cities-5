import {connect} from 'react-redux';
import {getOffersByCity} from "../../utils";
import {mainPageTypes} from "../../prop-types";
import CardList from "../cards-list/cards-list";
import CitiesList from "../cities-list/cities-list";
import MainHeader from "../main-header/main-header";
import Map from "../map/map";
import NoOffers from "../no-offers/no-offers";
import React from "react";
import SortingWithDropdown from '../sorting/sorting';
import withActiveCard from "../../hocs/with-active-card/with-active-card";

const WithActiveCard = withActiveCard(CardList);

const MainPage = (props) => {
  const {placesAmount, offers, cities, city} = props;

  return (
    <div className="page page--gray page--main">
      <MainHeader
        isMainPage = {true}
      />

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
                <SortingWithDropdown />

                <WithActiveCard
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
