import React from "react";
import "./title.css";

export default function Title({ text }) {
  return (
    <div>
      <h1 className="title">{text}</h1>
      <p>Le quiz qui permet de tester <span className="highlitght">vraiment</span> vos connaissances</p>
    </div>
  );
}
