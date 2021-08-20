import axios from "axios";

const API_KEY = `278eb51a1ab4f1fe776657a4e48551dc`;
const API_BASIC = `https://api.themoviedb.org/3`;
const languange = `pt-BR`

const basicSearch = async(endpoint) => {
    const req = await axios(`${API_BASIC}${endpoint}`);
    const data = req.data
    return data;
}

export const getHomeList = async() => {
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                type:'tv',
                items: await basicSearch(`/discover/tv?with_network=213?language=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados',
                items: await basicSearch(`/trending/all/week?languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em alta',
                type:'movie',
                items: await basicSearch(`/movie/top_rated?languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                type:'movie',
                items: await basicSearch(`/discover/movie?with_genres=28&languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                type:'movie',
                items: await basicSearch(`/discover/movie?with_genres=35&languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                type:'movie',
                items:await basicSearch(`/discover/movie?with_genres=27&languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                type:'movie',
                items:await basicSearch(`/discover/movie?with_genres=10749&languange=${languange}&api_key=${API_KEY}`)
            },
            {
                slug:'animation',
                title:'Animação',
                type:'movie',
                items:await basicSearch(`/discover/movie?with_genres=16&languange=${languange}&api_key=${API_KEY}`)
            },
        ]
    }

export const getMovieInfo = async (movieId, type) => {
    if(!movieId || !type) return null

    return await basicSearch(`/${type}/${movieId}?language=${languange}&api_key=${API_KEY}`)
}