import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function ItemList() {

  const [number, setNumber] = useState(0)

  const navigate = useNavigate()

  const getRequest = async () =>{
    const response = await axios.get('http://project-k8s-app.com/api/number')
    console.log(response.data.number);
    setNumber(response.data.number)
  }

  const getMovie = async () =>{
    navigate("/movie-preview")
  }

  const postRequest = async () =>{
    const response = await axios.post('http://project-k8s-app.com/api/number',{})
  }

  return(
    <div>
      <h2>Proste endpointy z api bez baz danych</h2>
    <button onClick = {() => getRequest()}>Sprawdz stan</button>
    <div>{number}</div>
    <button onClick = {() => postRequest()}>Zwieksz</button>
    <button onClick = {() => getMovie()}>Bazy danych</button>
    </div>
  );
}