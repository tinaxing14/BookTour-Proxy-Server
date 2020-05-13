const express = require('express');
const itineraryRouter = express.Router();
const fetch = require('node-fetch')

const host = 'http://127.0.0.1:3002';

itineraryRouter.get('/', (req, res) => {
  const url =`${host}/tour`
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
    });
});


module.exports = itineraryRouter;