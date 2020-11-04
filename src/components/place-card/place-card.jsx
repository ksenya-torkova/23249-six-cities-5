import {Link} from "react-router-dom";
import {placeCardTypes} from "../../prop-types";
import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const DEFAULT_ID = 0;

const PlaceCard = (props) => {
  const {
    additionalCardClass,
    additionalContentClass,
    additionalImageClass,
    cardData,
    updateActiveCardId,
  } = props;

  const {
    id,
    image,
    isBookmarked,
    isPremium,
    name,
    price,
    raiting,
    type,
  } = cardData;

  return (
    <article
      className = {`place-card ${additionalCardClass}`}
      onMouseEnter = {() => updateActiveCardId(id)}
      onMouseLeave = {() => updateActiveCardId(DEFAULT_ID)}
      id = {id}
    >

      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

      <div className={`place-card__image-wrapper ${additionalImageClass}`}>
        <Link to = {`offer/${cardData.id}`}
          onClick = {() => updateActiveCardId(DEFAULT_ID)}
        >
          <img className="place-card__image" src={`img/${image}`} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className={`place-card__info ${additionalContentClass}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isBookmarked ?
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button> :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${raiting * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`offer/${cardData.id}`}
            onClick = {() => updateActiveCardId(DEFAULT_ID)}
          >{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = placeCardTypes;

const mapDispatchToProps = ((dispatch) => ({
  updateActiveCardId(id) {
    dispatch(ActionCreator.updateActiveCardId(id));
  }
}));

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
