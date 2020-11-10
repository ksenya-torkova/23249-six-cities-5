import {fieldChangeTypes} from "../../prop-types";
import React, {PureComponent} from "react";

const withFieldChange = (Component) => {
  class FieldChange extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: null,
      };

      this._handleFieldChange = this._handleFieldChange.bind(this);
    }

    render() {
      return <Component
        onFieldChange = {this._handleFieldChange}
      />;
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }
  }

  FieldChange.propTypes = fieldChangeTypes;

  return FieldChange;
};

export default withFieldChange;
