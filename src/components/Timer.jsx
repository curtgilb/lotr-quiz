import PropTypes from "prop-types";
import { useEffect } from "react";

export function Timer({ time, setTime, onEnd, paused }) {
  if (time < 0) {
    onEnd();
  }

  useEffect(() => {
    if (!paused) {
      const timerId = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [paused, setTime]);

  return <span className="timer">0:{String(time).padStart(2, "0")}</span>;
}

Timer.propTypes = {
  time: PropTypes.number,
  setTime: PropTypes.func,
  onEnd: PropTypes.func,
  initialTime: PropTypes.number,
  paused: PropTypes.bool,
};
