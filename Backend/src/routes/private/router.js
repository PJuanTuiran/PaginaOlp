const express = require('express');

const userRoutes = require('./tablas/userRoutes');
const routesRoutes= require('./tablas/routesRoutes')
const lenguajesRoutes= require('./tablas/languajesRoutes')
const modulesRoutes= require('./tablas/modulesRoutes')

const router = express.Router();




// canales
router.use('/users', userRoutes);
router.use('/routes',routesRoutes)
router.use('/languajes',lenguajesRoutes)
router.use('/modules',modulesRoutes)

module.exports = router;
