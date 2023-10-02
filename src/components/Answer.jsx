import PropTypes from "prop-types";
import { useRef } from "react";

export function Answer({ answer, id, handleSelection }) {
  const answerRef = useRef();

  function handleClick(event) {
    event.stopPropagation();
    answerRef.current.checked = true;
    handleSelection(id);
  }
  return (
    <div className="answers" key={id} onClick={handleClick}>
      <input ref={answerRef} value={id} type="radio" name="answers" />
      <label htmlFor={id}>{answer}</label>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string,
  id: PropTypes.string,
  handleSelection: PropTypes.func,
};
