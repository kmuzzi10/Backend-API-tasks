import express from 'express';
import { body } from 'express-validator';
import { createItem, fetchAllItems, fetchItemById, modifyItem, removeItem } from '../controllers/itemController.js';
import { validateNoExtraFields } from '../middlewares/validateFields.js';

const router = express.Router();

// allowed feilds in db
const allowedFields = ['name', 'description', 'price'];

router.post(
    '/items',
    [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isString().withMessage('Name must be a string')
            .matches(/^[A-Za-z\s]+$/).withMessage('Name should contain alphabetic characters only'),
        body('description')
            .notEmpty().withMessage('Description is required')
            .isString().withMessage('Description must be a string')
            .matches(/^[A-Za-z\s]+$/).withMessage('Description should contain alphabetic characters only'),
        body('price')
            .notEmpty().withMessage('Price is required')
            .isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
        validateNoExtraFields(allowedFields)
    ],
    createItem
);

router.get('/items', fetchAllItems);

router.get('/items/:id', fetchItemById);

router.put(
    '/items/:id',
    validateNoExtraFields(allowedFields),
    modifyItem
);


router.delete('/items/:id', removeItem);

export default router;
