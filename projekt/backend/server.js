const express = require('express');
const app = express();

const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1"
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const data = require('./data.json')

const Movie = require('./models/Movie');

const redis = require("redis");
const redisClient = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`});

const cors = require('cors')

app.use(express.json());
app.use(cors())


let number = 0;


app.post('/number', async (req, res) => {
  number+=1
  return res.send(req.body);
});

app.get('/number', async (req, res) => {
  return res.send({number: number});
});



app.get('/redis', async (req, res) => {
  const value = await redisClient.get("lastMovie")
  console.log(value);
  return res.send(value)
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    return res.send({allMovies: [...movies]});
  } catch(err) {
    return res.status(500).send({error: err.message})
  }
});


app.post('/movies/reload', async (req, res) => {
  try {
    await Movie.deleteMany()

    await Movie.insertMany(data.movies)
    res.status(200).send(true)
  }
  catch(err) {
    res.status(500).send({error: err.message})
  }

})

app.post('/movies', async (req, res) => {
  await redisClient.set("lastMovie", req.body.name);
  const movie = new Movie({
    name: req.body.name,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    director: req.body.director,
    scores: req.body.scores,
    imageurl: req.body.imageurl
  })

  try {
    const newMovie = await movie.save();
    return res.status(201).send(newMovie);
  } catch(err) {
    return res.status(400).send({error: err.message});
  }
});

require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || 'mongodb',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'Kubernetes'
};

const mongoose = require('mongoose');

(async () => {
  // await redisClient.connect();
  // console.log("Connected to redis")
mongoose
  .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 5000
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}, database: "${response.connections[0].name}"`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));
  await redisClient.connect()
  
})()


  
  // const port = 5000
  
  // app.listen(port, () => {
  //   console.log(`API server listening at http://localhost:${port}`);
  // });
  


