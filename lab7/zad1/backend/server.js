'use strict';

const express = require('express');
const redis = require('redis');

const app = express();

const PORT = process.env.REDISPORT;

let client = redis.createClient(6379);

client.on('error', (err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello redis world');
});

app.get('/getStuff', async (req, res) => {

  let data = "Hello world from redis endpoint";

  res.json({ data: data });
});

app.listen(PORT, () => {
  console.log('server is live on port ' + PORT);
});