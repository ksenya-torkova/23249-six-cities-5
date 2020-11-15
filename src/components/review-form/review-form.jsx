import {reviewFormTypes} from "../../prop-types";
import React, {Fragment, PureComponent} from "react";
import {connect} from 'react-redux';
import {postReview} from "../../store/api-actions";

const radioValues = [`5`, `4`, `3`, `2`, `1`];

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {rating, review, onFieldChange, isDisabledSubmitButton} = this.props;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit = {this._handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {radioValues.map((it) => (
            <Fragment key={it}>
              <input className="form__rating-input visually-hidden" name="rating" value={it} id={`${it}-stars`}
                onChange={onFieldChange} type="radio" checked={rating === it}
              />
              <label htmlFor={`${it}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange = {onFieldChange}
          value = {review}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled = {isDisabledSubmitButton ? `` : `disabled`}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {rating, review, id} = this.props;
    this.props.postReview(rating, review, id);

  }
}

ReviewForm.propTypes = reviewFormTypes;

const mapDispatchToProps = (dispatch) => ({
  postReview(rating, review, id) {
    dispatch(postReview(rating, review, id));
  }
});

export {ReviewForm};
export default connect(undefined, mapDispatchToProps)(ReviewForm);
