import express from 'express';
import { createItem, fetchAllItems, fetchItemById, modifyItem, removeItem } from '../controllers/itemController.js';
import { validateItemCreation, validateItemUpdate } from '../middlewares/validateFields.js';

const router = express.Router();

router.post('/items', validateItemCreation, createItem);

router.get('/items', fetchAllItems);

router.get('/items/:id', fetchItemById);

router.put('/items/:id', validateItemUpdate, modifyItem);

router.delete('/items/:id', removeItem);

export default router;
