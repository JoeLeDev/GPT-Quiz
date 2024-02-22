import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="container-home">
      <Title text={"GPT QUIZ"} />
      <div className="button-container">
        <Button label="HTML" />
        <Button label="CSS" />
        <Button label="JAVASCRIPT" />
        <Button label="REACT" />
      </div>
    </div>
  );
};

export default HomePage;
