import React from "react";
import PropTypes from "prop-types";

import Button from "common/button/Button";
import Icon from "common/icon/Icon";

class UndoButton extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  onUndo = () => this.props.undo();

  render() {
    return (
      <Button name="undo" outline title="Undo move" onClick={this.onUndo}>
        <Icon name="backward" alt="Undo" />
      </Button>
    );
  }
}

UndoButton.propTypes = {
  undo: PropTypes.func.isRequired
};

export default UndoButton;
