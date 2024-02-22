import { React } from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <Title text={"GPT QUIZ"} />
      <div className="button-container">
        <Button
          className="button-home"
          label="HTML"
          onClick={() => navigate("/quizz-html")}
        />
        <Button
          className="button-home"
          label="CSS"
          onClick={() => navigate("/quizz-css")}
        />
        <Button
          className="button-home"
          label="JAVASCRIPT"
          onClick={() => navigate("/quizz-js")}
        />
        <Button
          className="button-home"
          label="REACT"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default HomePage;
