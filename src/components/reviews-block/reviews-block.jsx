import {getSortedByDate} from "../../utils";
import {reviewsBlockTypes} from "../../prop-types";
import React from "react";
import ReviewForm from "../review-form/review-form";
import ReviewItem from "../review-item/review-item";
import withFieldChange from "../../hocs/with-field-change/with-field-change";

const WithFieldChange = withFieldChange(ReviewForm);

const ReviewsBlock = (props) => {
  const {reviews, id, isAuthorized} = props;
  const sortedReviews = getSortedByDate(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <ReviewItem
            key = {review.id}
            review = {review}
          />
        ))}
      </ul>

      {isAuthorized ?
        <WithFieldChange
          id = {id}
        />
        : false
      }
    </section>
  );
};

ReviewsBlock.propTypes = reviewsBlockTypes;

export default React.memo(ReviewsBlock);
