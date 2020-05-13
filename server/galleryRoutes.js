const express = require('express');
const galleryRouter = express.Router();
const fetch = require('node-fetch')

const host = 'http://127.0.0.1:9999';

galleryRouter.get('/:activityId/gallery', (req, res) => {
  const url =`${host}/tripAdvisor/${req.url}`;
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
});


module.exports = galleryRouter;