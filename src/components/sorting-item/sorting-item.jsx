import {sortingItemTypes} from "../../prop-types";
import React from 'react';

const SortingItem = (props) => {
  const {itemName, isActive, onSortingItemClick} = props;
  const activeClassName = isActive ? `places__option--active` : ``;

  return (
    <li
      className = {`places__option ${activeClassName}`}
      data-sorting = {itemName}
      onClick = {onSortingItemClick}
      tabIndex = "0"
    >
      {itemName}
    </li>
  );
};

SortingItem.propTypes = sortingItemTypes;

export default React.memo(SortingItem);
