import React from 'react';
import "./Pagination.styles.css"

const Pagination = ({juegosPorPag, allGames, paginado}) => {
    const pagNum = [];

    for (let i = 1; i <= Math.ceil(allGames/juegosPorPag); i++) { // .celi(6.6)=7
        pagNum.push(i)
    }
    return (
        <nav>
            <div className='paginacion'>
                {pagNum && pagNum.map(number => ( 
                    <span key={number}>
                        <button className='paginacion button'  onClick={() => paginado(number)}>{number}</button> {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
                    </span>
                ))}
            </div>
        </nav>
    )
}
export default Pagination;