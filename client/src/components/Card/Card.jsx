import { NavLink } from 'react-router-dom' //componenete de react router dom
import React from 'react';
import "./Card.styles.css"

class Card extends React.Component {

    render() {
        return (
            <div >
                
                    <h3 >{this.props.name}</h3>
                    <img className='image' src={this.props.image} alt=""/>
                    <p >{this.props.genres}</p>
                    <p >⭐ {this.props.rating}</p>
                 <NavLink to={`/detail/${this.props.id}`}><span>Leer más</span></NavLink >
             
            </div>
        )
    }
 
 }
 export default Card;