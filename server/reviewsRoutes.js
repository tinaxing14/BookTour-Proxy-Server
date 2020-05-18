const express = require('express');
const reviewsRouter = express.Router();
const fetch = require('node-fetch');

const host = 'http://3.12.90.50:3000';

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
  console.log(body)
  fetch(url, { 
    method: 'PUT', 
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => res.json(json));
});


module.exports = reviewsRouter;




