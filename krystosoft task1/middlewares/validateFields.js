export const validateNoExtraFields = (allowedFields) => (req, res, next) => {
    const extraFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));

    if (extraFields.length > 0) {
        return res.status(400).json({
            message: 'Only name, description, and price are required',
            extraFields: extraFields
        });
    }
    next();
};