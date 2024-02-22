import React from "react";

import "./button.css";

export default function Button({ label, className, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
