import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import data from "../assets/data.json";
import { Mountains } from "../components/Mountains";
import { Question } from "../components/Question";
import { Timer } from "../components/Timer";
import { Results } from "./Results";

const initialTime = 30;

export function Quiz() {
  const [level, setLevel] = useState(1); // Control the sky/mountain color
  const [entryTimeline, setEntryTimeline] = useState(); // Entrance animation timeline
  const headerRef = useRef();

  // Answers and reponses
  const [userAnswers, setUserAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(undefined);
  const questionBank = data.questions;
  const [completed, setCompleted] = useState(false);
  // Timer
  const [time, setTime] = useState(initialTime);
  const [pauseTimer, setPauseTimer] = useState(true);

  useLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => setPauseTimer(() => false),
        onReverseComplete: () => setCompleted(() => true),
      });
      t1.from(".question-title", { y: -100 }, 0.5);
      t1.from(
        ".layer",
        {
          duration: 1,
          y: 800,
          ease: "back.out(1.1)",
          stagger: 0.2,
        },
        0
      );
      t1.from(".gsap-wrapper", { opacity: 0, duration: 0.25 }, 1.2);
      setEntryTimeline(t1);
    }, headerRef);

    return () => gsapCtx.revert();
  }, []);

  function next() {
    // set answers
    setUserAnswers([...userAnswers, currentChoice]);
    setCurrentChoice(undefined);
    // Go to next question
    if (questionIndex < questionBank.length - 1) {
      setQuestionIndex((i) => i + 1);
      setTime(initialTime);
      if (questionIndex === 5 || questionIndex === 10) {
        setLevel((l) => l + 1);
      }
    } else {
      // End the game
      setPauseTimer(() => true);
      entryTimeline.reverse();
    }
  }

  if (completed) {
    return (
      <Results
        questions={questionBank}
        responses={userAnswers}
        quotes={data.quotes}
      ></Results>
    );
  }

  return (
    <div ref={headerRef} className={`quiz sky-${level}`}>
      <h1 className="question-title">
        Question {questionIndex + 1}
        <Timer
          time={time}
          setTime={setTime}
          initialTime={30}
          onEnd={() => {
            next();
          }}
          paused={pauseTimer}
        />
      </h1>
      <div className="gsap-wrapper">
        <div className="question-container">
          <Question
            question={questionBank[questionIndex].question}
            answers={questionBank[questionIndex].answers}
            handleSelection={setCurrentChoice}
            handleNext={next}
          />
          <button
            className="next"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              next();
            }}
          >
            {questionIndex === questionBank.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      <Mountains level={level} timeline={entryTimeline} />
    </div>
  );
}
