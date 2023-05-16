import React from "react";
import { Link } from 'react-router-dom';
import "./Landing.styles.css"

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h2>Este es el landing page</h2>
            <Link to='/home' >
                <button>Entrar</button>
            </Link>
        </div>
    )
}

export default LandingPage;