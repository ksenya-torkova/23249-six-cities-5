import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {sortingTypes} from "../../prop-types";
import {SotringType} from '../../const';
import React from 'react';
import SortingItem from '../sorting-item/sorting-item';
import withDropdownSorting from "../../hocs/with-dropdown-sorting/with-dropdown-sorting";

const sortingItemsNames = Object.values(SotringType);

const Sorting = (props) => {
  const {
    isOpen,
    onSortingClick,
    sortingType,
    updateSortingType,
  } = props;
  const openClassName = isOpen ? `places__options--opened` : ``;

  const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
    <SortingItem
      itemName = {itemName}
      key = {index}
      isActive = {sortingType === itemName}
      onSortingItemClick = {(evt) => {
        updateSortingType(evt.target.dataset.sorting);
        onSortingClick();
      }}
    />);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick = {onSortingClick}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openClassName}`}>
        {sortingItemsElements}
      </ul>
    </form>
  );
};

Sorting.propTypes = sortingTypes;

const mapStateToProps = (({APP}) => {
  return {
    sortingType: APP.sortingType,
  };
});

const mapDispatchToProps = ((dispatch) => ({
  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
}));

const SortingMemo = React.memo(Sorting);

export const SortingWithDropdown = withDropdownSorting(SortingMemo);
export default connect(mapStateToProps, mapDispatchToProps)(withDropdownSorting(SortingMemo));
