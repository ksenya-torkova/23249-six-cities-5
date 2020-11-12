import {ActionCreator} from '../../store/action';
import {citiesListTypes} from "../../prop-types";
import {connect} from 'react-redux';
import {nanoid} from "nanoid";
import {SotringType} from '../../const';
import City from "../city/city";
import React from "react";

const CitiesList = (props) => {
  const {
    changeCity,
    cities,
    currentCity,
    sortingType,
    updateOffers,
  } = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
    updateOffers(sortingType);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          city = {city}
          isCurrent = {currentCity === city}
          key = {nanoid()}
          onCityClick = {onCityClick}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (({APP}) => ({
  currentCity: APP.city,
  cities: APP.cities,
  sortingType: APP.sortingType,
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  updateOffers(sortingType) {
    dispatch(ActionCreator.updateOffers());

    switch (sortingType) {
      case SotringType.POPULAR:
        dispatch(ActionCreator.sortPopular());
        break;

      case SotringType.LOW_TO_HIGH:
        dispatch(ActionCreator.sortLowToHigh());
        break;

      case SotringType.HIGH_TO_LOW:
        dispatch(ActionCreator.sortHighToLow());
        break;

      case SotringType.TOP_RATED:
        dispatch(ActionCreator.sortTopRated());
    }
  },
}));

CitiesList.propTypes = citiesListTypes;

const CitiesListMemo = React.memo(CitiesList);

export {CitiesListMemo};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesListMemo);
