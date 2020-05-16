const express = require('express');
const travelersRouter = express.Router();
const fetch = require('node-fetch')

const host = 'http://3.23.167.116:80';

travelersRouter.get('/:id/price', (req, res) => {
  const url =`${host}/api/trip/${req.url}`
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
    });
});

travelersRouter.get('/:id/calendar/?', (req, res) => {
  const url= `${host}/api/trip${req.url}`
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
    });
})


module.exports = travelersRouter;