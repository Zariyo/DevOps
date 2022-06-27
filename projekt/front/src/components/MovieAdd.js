import React, { useState } from 'react';
import { Field, Form, Formik } from "formik"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Movie() {
  const navigate = useNavigate()


  const handleSubmit = async (values) => {
    await axios.post('http://project-k8s-app.com/api/movies', values)
    navigate(`/movie-preview`);
}

  return(
    <div>
    <h3>Dodaj film</h3>
    <button onClick={() => navigate("/movie-preview")}>Powrót</button>
    <Formik
        initialValues={{
            title: '',
            category: '',
            description: '',
            price: ''
        }}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize={true}>
            <Form>
            Tytuł
                <Field name="name" /><br/>
                Kategoria
                <Field name="genre" /><br/>
                Data wydania
                <Field name="releaseDate" /><br/>
                Reżyser
                <Field name="director" /><br/>
                <button type="submit">
                    Zatwierdź
                </button>
            </Form>
        </Formik>
</div>
  )
}