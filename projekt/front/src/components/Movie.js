import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Movie() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState()
  const [lastMovie, setLastMovie] = useState()

  const [movieNumber, setMovieNumber] = useState(0)
  const getMovie = async () => {
    let res = await axios.get('http://project-k8s-app.com/api/movies')
    console.log(res);
    setMovie(res.data.allMovies[(movieNumber % res.data.allMovies.length)].name)
    setMovieNumber(movieNumber + 1)
    
  }

  const reloadMovies = async () => {
    await axios.post('http://project-k8s-app.com/api/movies/reload')
  }
  
  const showMovie = () => {
    if(movie){
        return movie
    }
    else{
        return "No movie"
    }
  }

  const getRedis = async () => {
    const res = await axios.get("http://project-k8s-app.com/api/redis")
    setLastMovie(res.data)
  }

  const showLastMovie = () => {
    if(lastMovie){
        return lastMovie
    }else{
        return "Did not add any movie yet"
    }
  }

  return(
    <div>
      <h2>Endpointy z bazy mongo i redis</h2>
      <button onClick={() => navigate("/")}>Powrót</button>
        <button onClick={() => reloadMovies()}>Odśwież baze</button>
        <button onClick={() => getMovie()}>Pokaż film</button>
        <button onClick={() => navigate("/movie-preview/add")}>Dodaj film</button>
        <button onClick={() => getRedis()}>Pokaż ostatni ręcznie dodany film </button>
        <div>Film: {showMovie()}</div>
        <div>Ostatni dodany film: {showLastMovie()}</div>
    </div>
  )
}