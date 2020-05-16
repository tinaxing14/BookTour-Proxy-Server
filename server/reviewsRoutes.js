const express = require('express');
const reviewsRouter = express.Router();
const fetch = require('node-fetch');

const host = 'http://127.0.0.1:3001';

reviewsRouter.get('/', (req, res) => {
  const url= `${host}/reviews${req.url}`
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
    });
});

reviewsRouter.get('/:id', (req, res) => {
  const url= `${host}/reviews${req.url}`
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
    });
});

reviewsRouter.put('/', (req, res) => {
  const url= `${host}/reviews${req.url}`
  console.log(url)
  const body = { _id: req.body._id };
  body.toString();
  console.log(body)
  fetch(url, { method: 'PUT', body: body})
    .then(response => response.json())
    .then(json => res.json(json));
});


module.exports = reviewsRouter;




