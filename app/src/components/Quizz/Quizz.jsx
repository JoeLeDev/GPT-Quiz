import React, { useState } from "react";
import quizData from "../../data/quizzData.json";
import Button from "../Button/Button";

const Quiz = ({ quizIndex }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const resultPage = () => {
    setIsCorrect(quizData[quizIndex].questions[currentQuestion].answer === userAnswer);
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
  };

  return (
    <div>
      <h2>{quizData[quizIndex].questions[currentQuestion].question}</h2>
      {quizData[quizIndex].questions[currentQuestion].choices.map(
        (choice, index) => (
          <div key={index}>
            <input
              type="radio"
              value={choice}
              checked={userAnswer === choice}
              onChange={handleAnswerChange}
            />
            <label>{choice}</label>
          </div>
        )
      )}
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
      )}
      <Button label={"VALIDER"} onClick={resultPage}/>
    </div>
  );
};

export default Quiz;