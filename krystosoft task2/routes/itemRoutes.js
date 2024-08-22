import express from 'express';
import * as itemController from '../controllers/itemController.js';
import { itemValidationRules, validate, itemValidationRulesForUpdate } from '../middlewares/itemValidationMiddleware.js';

const router = express.Router();

router.post('/items', itemValidationRules, validate, itemController.createItem);
router.put('/items/:id', itemValidationRulesForUpdate, validate, itemController.updateItem);

router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);
router.delete('/items/:id', itemController.deleteItem);

export default router;
