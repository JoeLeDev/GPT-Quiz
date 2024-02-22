import React from 'react';
import { Link } from "react-router-dom"
import "./ErrorPage.css"
import image from "../../assets/image1.png"

const ErrorPage = () => {
  return (
    <div className='container'>
      <h1>Pourquoi tu quittes la page</h1>
      <img src={image} alt="" />
      <Link to="/">Retour</Link>
    </div>
  );
};

export default ErrorPage;
