import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h2>Este es el landing page</h2>
            <button> <Link to='/home' >Entrar</Link> </button>
        </div>
    )
}

export default LandingPage;