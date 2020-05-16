const express = require('express');
const itineraryRouter = express.Router();
const fetch = require('node-fetch')

const host = 'http://54.190.52.239';

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