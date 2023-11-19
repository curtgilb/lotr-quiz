import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
export function Timer({ onEnd, initialTime, start }) {
  const [time, setTime] = useState(initialTime);
  const timeRef = useRef();
  useEffect(() => {
    timeRef.current = time;
  }, [time]);

  useEffect(() => {
    let timerId;
    setTime(initialTime);
    if (start) {
      timerId = setInterval(() => {
        if (timeRef.current > 0) {
          setTime((t) => t - 1);
        } else {
          clearInterval(timerId);
          onEnd();
        }
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [start, initialTime]);

  return (
    <span className="timer">
      0:{time.toString().length === 2 ? time : `0${time}`}
    </span>
  );
}

Timer.propTypes = {
  onEnd: PropTypes.func,
  initialTime: PropTypes.number,
  isActive: PropTypes.bool,
  start: PropTypes.bool,
};
