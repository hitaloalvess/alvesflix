import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import MovieItem from '../MovieItem/index'

import './style.css'
const MovieRow = ({title, items}) => {
    
    const [scrollX, setScrollX] = useState(0);

    const handleButtonRight = () => {
        let move = scrollX - Math.round(window.innerWidth / 2);
        const sizeListArea = items.length * 150;  

        if(window.innerWidth - sizeListArea > move)
        {
            move = (window.innerWidth - sizeListArea) - 60;
        }

        setScrollX(move);
    }

    const handleButtonLeft = () => {
        let move = scrollX + Math.round(window.innerWidth / 2);

        if( move > 0 ){
            move = 0
        }

        setScrollX(move);
    }

    return ( 
        <article className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--list-area">
                    <button className="button--left"
                            onClick={handleButtonLeft}>
                        <KeyboardArrowLeftIcon />
                    </button>
                    <button className="button--right"
                            onClick={handleButtonRight}>
                        <KeyboardArrowRightIcon />
                    </button>
                
                <div className="movieRow--list" style={{
                        marginLeft:scrollX,
                        width: items.length * 150 
                    }}>
                    {items.length > 0 && items.map( (item, index) => 
                        <MovieItem key={index} item={item} /> 
                    )}
                </div>
            </div>
        </article>
     );
}
 
export default MovieRow;