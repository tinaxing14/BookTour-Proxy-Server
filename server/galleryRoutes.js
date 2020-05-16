const express = require('express');
const galleryRouter = express.Router();
const fetch = require('node-fetch')

const host = 'http://13.52.101.132:80';

galleryRouter.get('/:activityId/gallery', (req, res) => {
  const url =`${host}/tripAdvisor${req.url}`;
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(json => res.json(json))
});


module.exports = galleryRouter;