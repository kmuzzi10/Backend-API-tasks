import { body, validationResult, check } from 'express-validator';

export const itemValidationRules = [
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
        .isFloat({ gt: 0 }).withMessage('Price must be greater than zero')
    ,
    check().custom((value, { req }) => {
        const allowedFields = ['name', 'description', 'price'];
        const invalidFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid fields in request body: ${invalidFields.join(', ')}`);
        }
        return true;
    })
];


export const itemValidationRulesForUpdate = [
    body('name')
        .optional()
        .matches(/^[A-Za-z\s]+$/).withMessage('Name should contain alphabetic characters only'),
    body('description')
        .optional()
        .matches(/^[A-Za-z\s]+$/).withMessage('Description should contain alphabetic characters only'),
    body('price')
        .optional()
        .isFloat({ gt: 0 }).withMessage('Price should be greater than zero.')
    ,
    check().custom((value, { req }) => {
        const allowedFields = ['name', 'description', 'price'];
        const invalidFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid fields in request body: ${invalidFields.join(', ')}`);
        }
        return true;
    })
];



export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            message: "Validation Failed",
            errors: errors.array()
        });
    }
    next();
};
