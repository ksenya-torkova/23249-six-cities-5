import React, {PureComponent} from "react";

const withDropdownSorting = (Component) => {
  return class DropdownSorting extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this._onSortingClick = this._onSortingClick.bind(this);
    }

    render() {
      const {isOpen} = this.state;

      return <Component
        {...this.props}
        isOpen = {isOpen}
        onSortingClick = {this._onSortingClick}
      />;
    }

    _onSortingClick() {
      this.setState((previusState) => ({
        isOpen: !previusState.isOpen,
      }));
    }
  };
};

export default withDropdownSorting;
