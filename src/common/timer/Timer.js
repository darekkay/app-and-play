import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import "./Timer.scss";

/* TODO: write tests */
/* istanbul ignore file */
class Timer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.initialSeconds
    };
  }

  componentDidUpdate(prevProps, prevState) {
    /* NICE: implement stop/resume if needed */
    if (!prevProps.active && this.props.active) {
      this.start();
    } else if (!prevProps.restart && this.props.restart) {
      this.restart();
    } else if (prevProps.active && !this.props.active) {
      this.stop();
    }
  }

  componentWillUnmount() {
    if (this.interval) this.stop();
  }

  tick = () =>
    this.setState(state => {
      if (state.seconds === 0) {
        this.stop();
        return null;
      }
      return { seconds: state.seconds - 1 };
    });

  start = () => {
    if (this.interval) clearInterval(this.interval);
    this.setState({
      seconds: this.props.initialSeconds
    });
    this.interval = setInterval(this.tick, 1000);
  };

  restart = () => {
    this.start();
    this.props.onRestarted();
  };

  stop = () => {
    this.props.onFinish();
    clearInterval(this.interval);
  };

  render() {
    return <div className="timer">{this.state.seconds}</div>;
  }
}

Timer.propTypes = {
  initialSeconds: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  restart: PropTypes.bool,
  onFinish: PropTypes.func,
  onRestarted: PropTypes.func
};

Timer.defaultProps = {
  onFinish: _.noop,
  onRestarted: _.noop,
  restart: false
};

export default Timer;
