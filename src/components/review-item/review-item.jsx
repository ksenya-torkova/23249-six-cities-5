import {reviewItemTypes} from "../../prop-types";
import moment from "moment";
import React from "react";

const ReviewItem = (props) => {
  const {review} = props;
  const {
    date,
    description,
    rating,
    userInfo,
  } = review;

  const {
    avatar,
    name,
  } = userInfo;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={date}>{moment(date, `YYYY-MM-DD`).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = reviewItemTypes;

export default React.memo(ReviewItem);
