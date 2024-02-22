import React from "react";
import Title from "../../components/Title/Title";
import Quiz from "../../components/Quizz/Quizz";

const QuizzPageJs = () => {
  return (
    <div>
      <Title text={"Quiz JavaScript"} />
      <Quiz quizIndex={0}/>
    </div>
  );
};

export default QuizzPageJs;
