import React, { useState, useEffect } from "react";
import quizData from "../../data/quizzData.json";
import Button from "../Button/Button";

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
    <div onCopy={handleCopy}>
      {quizData[quizIndex].questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h2>{question.question}</h2>
          {question.choices.map((choice, choiceIndex) => {
            const isUserAnswer = userAnswers[questionIndex] === choice;
            return (
              <div key={choiceIndex}>
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
      <Button label={"VALIDER"} onClick={handleSubmit} />
    </div>
  );
};

export default Quiz;