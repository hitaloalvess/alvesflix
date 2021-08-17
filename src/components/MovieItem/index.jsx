
import React from 'react';
import { useModal } from '../../providers/modal';

import './style.css';
const MovieItem = ({item}) => {

    const { setModal } = useModal();

    const handleMouse = (e, flag) => {
        console.log('Abrindo modal');
        setModal({visible:flag, name:''});
    }

    return ( 
            <div className="movieItem" onMouseEnter={ (e) => handleMouse(e, true)}  >
                <img   src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_name}`} />
            </div>
    );
}
 
export default MovieItem;