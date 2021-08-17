import React, {useState} from 'react';

import './style.css';
const MovieItem = ({item}) => {

    const [isVisibleContent, setIsVisibleContent] = useState(false);
    
    const handleMouse = (flag) => {
        setIsVisibleContent(flag);
    }

    return ( 
            <div className="movieItem" onMouseEnter={ () => handleMouse(true)} onMouseOut={ () => handleMouse(false)} >
                <img   src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_name}`} />
                {isVisibleContent && <h1>CONTENT</h1>}
            </div>
    );
}
 
export default MovieItem;