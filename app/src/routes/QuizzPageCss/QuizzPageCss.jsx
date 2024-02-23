import React from "react";
import Title from "../../components/Title/Title";
import Quiz from "../../components/Quizz/Quizz";

const QuizzPageCss = () => {
    return (
        <div>
            <Title text={"Quiz CSS"} />
            <Quiz quizIndex={2} />
        </div>
    );
};

export default QuizzPageCss;
