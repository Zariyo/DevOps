import React, { useState, useEffect } from 'react';
import './App.css';
import ItemList from './components/ItemList'
import Movie from './components/Movie'
import MovieAdd from './components/MovieAdd'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <header className="App-header">
      <div className="wrapper">
      <h1>K8s react-mongo-redis app</h1>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/movie-preview" element={<Movie />}/>
        <Route path="/movie-preview/add" element={<MovieAdd />}/>
      </Routes>
    </BrowserRouter>
    </div>
      </header>
    </div>
  );
}

export default App;