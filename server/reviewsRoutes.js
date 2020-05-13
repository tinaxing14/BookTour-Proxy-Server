const express = require('express');
const reviewsRouter = express.Router();
const fetch = require('node-fetch');

const host = 'http://127.0.0.1:3001';

reviewsRouter.get('/', (req, res) => {
  const url= `${host}/reviews${req.url}`
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json));
});

reviewsRouter.get('/:id', (req, res) => {
  const url= `${host}/reviews${req.url}`
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json));
});

// reviewsRouter.put('/', (req, res) => {
//   const url= `${host}/reviews${req.url}`
//   console.log(req.body._id)
//   fetch(url, { method: 'PUT', body: { _id: req.body._id }})
//     .then(response => response.json())
//     .then(json => res.json(json));
// });


module.exports = reviewsRouter;




