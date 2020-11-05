import React, { PureComponent } from "react";
import cl from "classnames";

import Card from "../card/Card";
import Icon from "../icon/Icon";

import "./Pile.scss";

class Pile extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props.name);
  };

  render() {
    const { value, order, tenRuleOut } = this.props;
    return (
      <div className="pile">
        {order === "ascending" && <Icon name="arrow-up" />}
        <Card
          className={cl({ "ten-rule-out": tenRuleOut })}
          value={value}
          onClick={this.onClick}
        />
        {order === "descending" && <Icon name="arrow-down" />}
      </div>
    );
  }
}

export default Pile;
