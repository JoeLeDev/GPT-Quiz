import React from 'react';
<<<<<<< Updated upstream

const ErrorPage = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oops! Something went wrong.</p>
=======
import { Link } from "react-router-dom"
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div className='container'>
      <h1>Pourquoi tu quittes la page</h1>
      <Link to="/">Retour</Link>
>>>>>>> Stashed changes
    </div>
  );
};

export default ErrorPage;
