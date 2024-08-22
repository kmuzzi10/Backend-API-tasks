import { body } from 'express-validator';

const allowedFields = ['name', 'description', 'price'];

export const validateNoExtraFields = (req, res, next) => {
    const extraFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));

    if (extraFields.length > 0) {
        return res.status(400).json({
            message: 'Only name, description, and price are required',
            extraFields: extraFields
        });
    }
    next();
};

export const validateItemCreation = [
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
    validateNoExtraFields
];

export const validateItemUpdate = [
    body('name')
        .optional()
        .isString().withMessage('Name must be a string')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name should contain alphabetic characters only'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string')
        .matches(/^[A-Za-z\s]+$/).withMessage('Description should contain alphabetic characters only'),
    body('price')
        .optional()
        .isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
    validateNoExtraFields
];


