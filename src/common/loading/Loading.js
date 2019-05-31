import React, { memo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Loading.scss";

const Loading = memo(({ className }) => (
  <div className={cn("loading", className)} aria-label="Loading..." />
));

Loading.propTypes = {
  className: PropTypes.string
};

Loading.defaultProps = {
  className: undefined
};

export default Loading;
