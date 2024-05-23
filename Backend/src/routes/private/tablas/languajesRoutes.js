

const express = require('express');
const { getAll, getById, update, delete: deleteUser } = require('../../../controllers/languajesRoutes');

const router = express.Router();




router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteUser);


module.exports = router;
