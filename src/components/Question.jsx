import PropTypes from "prop-types";
import { Answer } from "./Answer";
export function Question({
  question,
  answers,
  buttonText,
  handleSelection,
  handleNext,
}) {
  return (
    <div className="question-container">
      <p className="question-txt">{question}</p>
      <div className="answers-container">
        {Object.entries(answers).map(([id, answer]) => (
          <Answer
            key={id}
            id={id}
            answer={answer.response}
            handleSelection={handleSelection}
          />
        ))}
      </div>

      <button
        className="next"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleNext();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string,
  answers: PropTypes.object,
  handleSelection: PropTypes.func,
  handleNext: PropTypes.func,
  buttonText: PropTypes.string,
};
