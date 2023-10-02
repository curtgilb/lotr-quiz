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
      <form>
        <fieldset>
          <legend className="question-txt">{question}</legend>
          {Object.entries(answers).map(([id, answer]) => (
            <Answer
              key={id}
              id={id}
              answer={answer.response}
              handleSelection={handleSelection}
            />
          ))}
        </fieldset>
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
      </form>
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
