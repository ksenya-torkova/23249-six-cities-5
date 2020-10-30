import {ActionCreator} from '../../store/action';
import {citiesListTypes} from "../../prop-types";
import {connect} from 'react-redux';
import {nanoid} from "nanoid";
import City from "../city/city";
import React from "react";

const CitiesList = (props) => {
  const {cities, currentCity, changeCity} = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
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

const mapStateToProps = (({city, cities}) => ({
  currentCity: city,
  cities,
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
}));

CitiesList.propTypes = citiesListTypes;

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
