import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {SotringType} from '../../const';
import {sortingTypes} from "../../prop-types";
import React, {PureComponent} from 'react';
import SortingItem from '../sorting-item/sorting-item';

const sortingItemsNames = Object.values(SotringType);

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this._handleSortingClick = this._handleSortingClick.bind(this);
    this._onSortingItemClick = this._onSortingItemClick.bind(this);
  }

  render() {
    const {activeItem} = this.props;
    const openClassName = this.state.isOpen ? `places__options--opened` : ``;

    const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
      <SortingItem
        itemName = {itemName}
        key = {index}
        isActive = {activeItem === itemName}
        onSortingItemClick = {this._onSortingItemClick}
      />);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick = {this._handleSortingClick}>
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
  }

  componentDidUpdate() {
    const {
      activeItem,
      sortHighToLow,
      sortLowToHigh,
      sortPopular,
      sortTopRated,
    } = this.props;

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
  }

  _handleSortingClick() {
    this.setState((previusState) => ({
      isOpen: !previusState.isOpen
    }));
  }

  _onSortingItemClick(evt) {
    this.props.updateSortingType(evt.target.dataset.sorting);

    this.setState((previusState) => ({
      isOpen: !previusState.isOpen,
    }));
  }
}

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

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
