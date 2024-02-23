import React from "react";
import Title from "../../components/Title/Title";
import Quiz from "../../components/Quizz/Quizz";

const QuizzPageJs = () => {
    return (
        <div>
            <Title text={"Quiz React"} />
            <Quiz quizIndex={3} />
        </div>
    );
};

export default QuizzPageJs;
