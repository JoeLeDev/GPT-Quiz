<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import image from "../../assets/image1.png";
=======
import React from 'react';
import { Link } from "react-router-dom"
import "./ErrorPage.css"
import image from "../../assets/image1.png"

>>>>>>> eca0d4d (fix)

const ErrorPage = () => {
    return (
        <div className="container">
            <h1>POURQUOI TU QUITTES LA PAGE</h1>
            <img src={image} alt="" />
            <Link to={"/"}>RETOUR</Link>
        </div>
    );
};

export default ErrorPage;
