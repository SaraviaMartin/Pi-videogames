import React from "react";
import { Link } from 'react-router-dom';
import "./Landing.styles.css"

const LandingPage = () => {
    return (
        <div className="background">
            <div className="containerCentral">
            <h2 className="titulo">Este es el landing page</h2>
            <Link to='/home' >
                <button className="boton">Entrar</button>
            </Link>
        </div>
        </div>
        
    )
}

export default LandingPage;