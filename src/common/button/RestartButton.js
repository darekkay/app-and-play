import React from "react";
import PropTypes from "prop-types";

import Button from "common/button/Button";
import Icon from "common/icon/Icon";

class RestartButton extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  onRestart = () =>
    this.props.moves.restart ? this.props.moves.restart() : this.props.reset();

  render() {
    return (
      <Button
        name="restart"
        type="secondary"
        outline
        title="Restart game"
        onClick={this.onRestart}
      >
        <Icon name="undo" alt="Restart" />
      </Button>
    );
  }
}

RestartButton.propTypes = {
  reset: PropTypes.func.isRequired,
  moves: PropTypes.object.isRequired
};

export default RestartButton;
