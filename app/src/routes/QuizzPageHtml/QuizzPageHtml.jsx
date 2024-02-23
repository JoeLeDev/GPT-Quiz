import React from "react";
import Title from "../../components/Title/Title";
import Quiz from "../../components/Quizz/Quizz";

const QuizzPageHtml = () => {
    return (
        <div>
            <Title text={"Quiz HTML"} />
            <Quiz quizIndex={1} />
        </div>
    );
};

export default QuizzPageHtml;
