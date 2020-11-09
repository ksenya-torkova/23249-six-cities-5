import {activeCardTypes} from "../../prop-types";
import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class ActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };

      this._handleChangeActiveCard = this._handleChangeActiveCard.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onHoverCard = {this._handleChangeActiveCard}
      />;
    }

    _handleChangeActiveCard(room) {
      this.setState(() => ({
        activeCard: room.id,
      }));
    }
  }

  ActiveCard.propTypes = activeCardTypes;

  return ActiveCard;
};

export default withActiveCard;
