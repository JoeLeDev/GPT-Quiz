import React from 'react';
import { Link } from "react-router-dom"
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className='container'>
      <h1>Pourquoi tu quittes la page</h1>
      <img src="../../../public/assets/image1.png" alt="" />
      <Link to="/">Retour</Link>
    </div>
  );
};

export default ErrorPage;
