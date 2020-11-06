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
    activeItem,
    updateSortingType,
    isOpen,
    onSortingClick,
    sortHighToLow,
    sortLowToHigh,
    sortPopular,
    sortTopRated,
  } = props;
  const openClassName = isOpen ? `places__options--opened` : ``;

  switch (activeItem) {
    case SotringType.HIGH_TO_LOW:
      sortHighToLow();
      break;

    case SotringType.LOW_TO_HIGH:
      sortLowToHigh();
      break;

    case SotringType.POPULAR:
      sortPopular();
      break;

    case SotringType.TOP_RATED:
      sortTopRated();
  }

  const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
    <SortingItem
      itemName = {itemName}
      key = {index}
      isActive = {activeItem === itemName}
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
        {activeItem}
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

const mapStateToProps = (({sortingType}) => {
  return {
    activeItem: sortingType,
  };
});

const mapDispatchToProps = ((dispatch) => ({
  sortHighToLow() {
    dispatch(ActionCreator.sortHighToLow());
  },

  sortLowToHigh() {
    dispatch(ActionCreator.sortLowToHigh());
  },

  sortPopular() {
    dispatch(ActionCreator.sortPopular());
  },

  sortTopRated() {
    dispatch(ActionCreator.sortTopRated());
  },

  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
}));

const SortingMemo = React.memo(Sorting);

export const SortingWithDropdown = withDropdownSorting(SortingMemo);
export default connect(mapStateToProps, mapDispatchToProps)(withDropdownSorting(SortingMemo));
