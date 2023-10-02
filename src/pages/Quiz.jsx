import { useState, useLayoutEffect, useRef } from "react";
import { Results } from "./Results";
import { Question } from "../components/Question";
import { Mountains } from "../components/Mountains";
import { Timer } from "../components/Timer";
import data from "../assets/data.json";
import gsap from "gsap";

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
  const [startTimer, setStartTimer] = useState(false);

  useLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => setStartTimer(() => true),
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
      t1.from(".question-container", { opacity: 0, duration: 0.25 }, 1.2);
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
      // level === 7 || level === 14
      setQuestionIndex(() => questionIndex + 1);
      if (questionIndex === 2 || questionIndex === 5) {
        setLevel((l) => l + 1);
      }
    } else {
      // End the game
      entryTimeline.reverse();
    }
  }

  function handleSelection(id) {
    setCurrentChoice(() => id);
  }
  if (completed) {
    return (
      <Results
        questions={questionBank}
        responses={userAnswers}
        quotes={data.quotes}
      ></Results>
    );
  } else {
    return (
      <div ref={headerRef} className={`quiz sky-${level}`}>
        <h1 className="question-title">
          Question {questionIndex + 1}{" "}
          <Timer
            key={questionIndex}
            initialTime={30}
            onEnd={() => {
              next();
            }}
            start={startTimer}
          />
        </h1>

        <Question
          key={questionIndex}
          question={questionBank[questionIndex].question}
          answers={questionBank[questionIndex].answers}
          buttonText={
            questionIndex === questionBank.length - 1 ? "Finish" : "Next"
          }
          handleSelection={handleSelection}
          handleNext={next}
        />
        <Mountains level={level} timeline={entryTimeline} />
      </div>
    );
  }
}
