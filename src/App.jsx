import React, { useEffect, useState } from 'react';
import { getHomeList, getMovieInfo } from './Tmdb';

import Header from './components/Header/index';
import FeaturedMovie from './components/FeaturedMovie/index';
import MovieRow from './components/MovieRow/index';
import Footer from './components/Footer/index';
import Modal from './components/Modal';

import './App.css';
import { useModal } from './providers/modal';

function App() {

  const [homeMovieList, setHomeMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const { modal } = useModal();
  console.log(modal)

  useEffect(() => {
    const homeList = async() => {
      const list = await getHomeList();
      setHomeMovieList(list);

      const originals = list.filter(item => item.slug === "originals");
      const positionRandom = Math.round( Math.random() * (originals[0].items.results.length - 1));
      const itemChosen = originals[0].items.results[positionRandom];
      const itemInfo = await getMovieInfo(itemChosen.id, 'tv');
      setFeaturedData(itemInfo);
    }

    homeList();
  }, [])
  return ( 
    <>
            <main className="page">
              <Header />
              {featuredData && <FeaturedMovie item={featuredData} />}
              <section className="content-genres">
                  {(homeMovieList.length > 0 && homeMovieList) && homeMovieList.map( (movie, index) => 
                      <MovieRow key={index} title={movie.title} items={movie.items.results} /> )
                  }
              </section>
              <Footer /> 
            </main>
             {modal.visible && <Modal />}  
      
    </>
          );
}
// https://medium.com/reactbrasil/modal-funcional-com-react-hooks-ddaf6224efa1

export default App;
