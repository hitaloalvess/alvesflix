import React from 'react';

import './style.css';
const MovieItem = ({item}) => {
    return ( 
            <div className="movieItem">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_name}`} />
            </div>
    );
}
 
export default MovieItem;