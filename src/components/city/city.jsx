import React from "react";
import {cityTypes} from "../../prop-types";

const City = (props) => {
  const {city, isCurrent, onCityClick} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isCurrent ? `tabs__item--active` : ``}`}
        href="#"
        onClick = {onCityClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = cityTypes;

export default React.memo(City);
