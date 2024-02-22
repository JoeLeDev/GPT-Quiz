import React, { useState, useEffect } from "react";
import quizData from "../../data/quizzData.json";
import Button from "../Button/Button";
import "./quizz.css";

const Quiz = ({ quizIndex }) => {
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData[quizIndex].questions.length).fill("")
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      console.log("cheff????");
    }
  };

  const handleCopy = (event) => {
    event.preventDefault();
    console.log("raweee t'es une merde hahahahahaa");
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div onCopy={handleCopy} className="container-quizz">
      {quizData[quizIndex].questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p className="number-question">{question.number}</p>
          <div className="line"></div>
          <h2 className="title-question">{question.question}</h2>
          {question.choices.map((choice, choiceIndex) => {
            const isUserAnswer = userAnswers[questionIndex] === choice;
            return (
              <div key={choiceIndex} className="quizz">
                <input
                  type="radio"
                  value={choice}
                  checked={isUserAnswer}
                  onChange={() => handleAnswerChange(questionIndex, choice)}
                />
                <label
                  style={
                    isSubmitted && isUserAnswer
                      ? { color: question.answer === choice ? "green" : "red" }
                      : {}
                  }
                >
                  {choice}
                </label>
              </div>
            );
          })}
        </div>
      ))}
      <div className="button-result">
        <Button label={"VALIDER"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Quiz;
