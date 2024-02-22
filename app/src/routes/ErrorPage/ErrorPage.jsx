import React from 'react';
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <div>
      <h1>Pourquoi tu quittes la page</h1>
      <Link to="/">Retour</Link>
    </div>
  );
};

export default ErrorPage;
