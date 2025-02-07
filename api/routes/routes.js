const { Router } = require('express');
const router = Router();
const equipments = require('../controllers/equipments');
const catalogs = require('../controllers/catalogs');
const users = require('../controllers/users');

// Catalogs endpoints 
router.get('/brands', catalogs.getEquipmentBrands);
router.get('/locations', catalogs.getLocaations);
router.get('/types', catalogs.getEquipmentTypes);

// Equipments endpoint
router.get('/equipments', equipments.getEquipmentList);
router.post('/create-equipment', equipments.createEquipment);
router.get('/equipment', equipments.getEquipment);
// Users endpoint
router.get('/users', users.getUserList);

module.exports = router;