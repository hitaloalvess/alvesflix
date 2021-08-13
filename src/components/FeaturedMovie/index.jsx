import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

import './style.css'
const FeaturedMovie = ({item}) => {

    const extractGender = (genres) => {
        let listGenres = genres.reduce((acc, item, index, array) => acc += index === array.length - 1 ? `${item.name}.`:`${item.name}, `, []);

        return listGenres;
    }

    return (
        <section className="featuredMovie" style={{
            background:`url(https://image.tmdb.org/t/p/original${item.backdrop_path}) center/cover`
        }}>

            <div className="featuredMovie--vertical">
                <div className="featuredMovie--horizontal">
                    <article>
                        <h1>{item.original_name}</h1>
                        <div className="info">
                            <p className="points">{`${(item.vote_average) * 10}%`}</p>
                            <p className="year">{new Date(item.last_air_date).getFullYear()}</p>
                            <p className="seasons">{`${item.seasons.length} temporadas`}</p>
                        </div>
                        <div className="overview">{item.overview}</div>
                        <div className="buttons">
                            <button> <PlayArrowIcon style={{fontSize:20}}/> Assistir</button>
                            <button> <AddIcon style={{fontSize:20}} /> Minha Lista</button>
                        </div>
                        <div className="genres">{`Gêneros: ${extractGender(item.genres)}`}</div>
                    </article>
                </div>
            </div>
        </section>
     );
}
 
export default FeaturedMovie;