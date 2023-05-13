import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h2>Este es el landing page</h2>
            <Link to='/home' >
                <button>Entrar</button>
            </Link>
        </div>
    )
}

export default LandingPage;