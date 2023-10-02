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
          console.log(totalScore);
          return totalScore + 1;
        }
        return totalScore;
      }, 0),
    [questions, responses]
  );

  const percentageCorrect = useMemo(
    () => numberCorrect / questions.length,
    [numberCorrect, questions]
  );

  useLayoutEffect(() => {
    var duration = 15 * 1000;
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
  });

  function getQuote(percentage) {
    console.log("Percentage" + percentage);
    for (const bracket of quotes) {
      if (
        percentage * 100 >= bracket.minScore &&
        percentage * 100 <= bracket.maxScore
      ) {
        const random = getRandomNumber(0, bracket.quotes.length - 1, true);
        return bracket.quotes[random];
      }
    }
    return "error";
  }

  return (
    <div className={`results${percentageCorrect <= 0.6 ? " fail" : " pass"}`}>
      <div className="score-wrapper">
        <h1 className="score-title">Results</h1>
        <p className={`score-percentage ${percentageCorrect <= 0.6 && "red"}`}>
          {(percentageCorrect * 100).toPrecision(2)}%
        </p>
        <p className="score-quote">{getQuote(percentageCorrect).quote}</p>
        <p className="quote-source">~Frodo</p>
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
