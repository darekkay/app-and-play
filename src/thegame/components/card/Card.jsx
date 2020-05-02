import React, { PureComponent } from "react";
import cl from "classnames";

import "./Card.css";

class Card extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props);
  };

  render() {
    const { value, disabled, selectable, selected, className } = this.props;

    return (
      <div
        className={cl(
          "card",
          { "card-disabled": disabled },
          { "card-selected": selected },
          { "card-selectable": selectable },
          className
        )}
        onClick={this.props.onClick && this.onClick}
      >
        {value}
      </div>
    );
  }
}

export default Card;
