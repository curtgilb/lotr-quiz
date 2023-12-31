import PropTypes from "prop-types";
import { useMemo, useLayoutEffect } from "react";
import { Icon } from "../components/Icon";
import confetti from "canvas-confetti";

function getRandomNumber(min, max, wholeNumbers = false) {
  const diff = max - min;
  const rand = Math.random() * diff + min;
  return wholeNumbers ? Math.round(rand) : rand;
}

export function Results({ questions, responses, quotes }) {
  const numberCorrect = useMemo(
    () =>
      responses.reduce((totalScore, thisResponse, index) => {
        if (thisResponse && questions[index].answers[thisResponse].isCorrect) {
          return totalScore + 1;
        }
        return totalScore;
      }, 0),
    [questions, responses]
  );

  const percentageCorrect = Math.round(
    (numberCorrect / questions.length) * 100
  );

  const quote = useMemo(() => {
    for (const bracket of quotes) {
      if (
        percentageCorrect >= bracket.minScore &&
        percentageCorrect <= bracket.maxScore
      ) {
        const random = getRandomNumber(0, bracket.quotes.length - 1, true);
        return bracket.quotes[random];
      }
    }
    return "error";
  }, [percentageCorrect]);

  useLayoutEffect(() => {
    if (percentageCorrect >= 100) {
      var duration = 2 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: getRandomNumber(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: getRandomNumber(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
      return () => confetti.reset();
    }
  });

  return (
    <div className={`results${percentageCorrect <= 60 ? " fail" : " pass"}`}>
      <div className="score-wrapper">
        <h1 className="score-title">Results</h1>
        <p
          className={`score-percentage ${
            percentageCorrect <= 60 ? "red" : "green"
          }`}
        >
          {percentageCorrect}%
        </p>
        <p className="score-quote">{quote.quote}</p>
        <p className="quote-source">~{quote.source}</p>
        <p className="score-text">
          You answered {numberCorrect} out of {questions.length} correctly
        </p>
        <ol className="score-questions">
          {questions.map((question, index) => {
            return (
              <li key={index}>
                <Icon
                  isCorrect={
                    responses[index]
                      ? question.answers[responses[index]].isCorrect
                      : false
                  }
                ></Icon>
                <p>{`${index + 1}. ${question.question}`}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

Results.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  responses: PropTypes.arrayOf(PropTypes.string),
  quotes: PropTypes.arrayOf(PropTypes.object),
};
