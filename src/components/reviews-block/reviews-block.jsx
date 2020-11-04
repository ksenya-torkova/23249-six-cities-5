import {reviewsBlockTypes} from "../../prop-types";
import React from "react";
import ReviewForm from "../review-form/review-form";
import ReviewItem from "../review-item/review-item";

const ReviewsBlock = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review) => (
          <ReviewItem
            review = {review}
            key = {review.id}
          />
        ))}

      </ul>

      <ReviewForm />

    </section>
  );
};

ReviewsBlock.propTypes = reviewsBlockTypes;

export default ReviewsBlock;
