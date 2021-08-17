import React from 'react';

import './style.css';
const MovieItem = ({item}) => {

   
    const handleModal = () => {
        console.log('ativando modal')
       
        const modal = document.querySelector('.modal-container');
        document.body.style.overflow='hidden';

        
        modal.style.display = 'block'
    }

    const handleMouseEnter = e => {
        console.log(e)
    }
    return ( 
            <div className="movieItem" onMouseEnter={(e) => handleMouseEnter(e)}  onClick={ () => handleModal()}>
                <img   src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_name}`} />
            </div>
    );
}
 
export default MovieItem;