import {fieldChangeTypes} from "../../prop-types";
import React, {PureComponent} from "react";

const CommentCharacter = {
  MIN: 50,
  MAX: 300,
};

const withFieldChange = (Component) => {
  class FieldChange extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: null,
        isValidForm: false,
      };

      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._handleClearFormField = this._handleClearFormField.bind(this);
    }

    componentDidUpdate() {
      const {rating, review} = this.state;

      if (rating && review.length >= CommentCharacter.MIN && review.length <= CommentCharacter.MAX) {
        this.setState({isValidForm: true});
      } else {
        this.setState({isValidForm: false});
      }
    }

    render() {
      const {rating, review, isValidForm} = this.state;
      const isDisabledSubmitButton = isValidForm;

      return <Component
        {...this.props}
        rating={rating}
        review={review}
        isDisabledSubmitButton={isDisabledSubmitButton}
        onFieldChange = {this._handleFieldChange}
        onClearFormField={this._handleClearFormField}
      />;
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    _handleClearFormField() {
      this.setState({
        rating: ``,
        review: ``,
      });
    }
  }

  FieldChange.propTypes = fieldChangeTypes;

  return FieldChange;
};

export default withFieldChange;
