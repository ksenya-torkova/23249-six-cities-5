import {ActionCreator} from '../../store/action';
import {citiesListTypes} from "../../prop-types";
import {connect} from 'react-redux';
import {nanoid} from "nanoid";
import City from "../city/city";
import React from "react";

const CitiesList = (props) => {
  const {
    changeCity,
    cities,
    currentCity,
  } = props;

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

const mapStateToProps = (({APP}) => ({
  currentCity: APP.city,
  cities: APP.cities,
  sortingType: APP.sortingType,
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
}));

CitiesList.propTypes = citiesListTypes;

const CitiesListMemo = React.memo(CitiesList);

export {CitiesListMemo};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesListMemo);
