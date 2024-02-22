import React from "react";
import "./title.css";

export default function Title({ text }) {
  return (
    <div className="container-title">
      <h1 className="title">{text}</h1>
      <p className="description">
        Le quiz qui permet de tester{" "}
        <span className="highlitght">vraiment</span> vos
      </p>
      <p className="description-second">connaissances</p>
    </div>
  );
}
