import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="container-home">
      <Title text={"GPT QUIZ"} />
      <div className="button-container">
        <Button variant='button-home' label="HTML" />
        <Button variant='button-home' label="CSS" />
        <Button variant='button-home' label="JAVASCRIPT" />
        <Button variant='button-home'label="REACT" />
      </div>
    </div>
  );
};

export default HomePage;
