const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const travelersRouter = require('./travelersRoutes.js');
const reviewsRouter = require('./reviewsRoutes.js');
const itineraryRouter = require('./itineraryRoutes.js');
const galleryRouter = require('./galleryRoutes.js');

const app = express();
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

app.use(express.static(path.join(__dirname, '../client')))
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/trip', travelersRouter);
app.use('/reviews', reviewsRouter);
app.use('/tour', itineraryRouter);
app.use('/tripAdvisor', galleryRouter);





