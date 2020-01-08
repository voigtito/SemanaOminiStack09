const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig); //documentacao do multer

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index); //chamando filtro dos spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //criando o spot

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes; //exportar as rotas do rquivo para a aplicação saber as rotas