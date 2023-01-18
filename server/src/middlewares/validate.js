const Joi = require('joi');
 const responseHelper = require('../helpers/response.helper');

const validate = (schema) => (req, res, next) => {
    const validSchema = schema[req.method.toLowerCase()];
    if (!validSchema) {
        return next();
    }
    
    const { error } = Joi.validate(req.body, validSchema);
    
    if (error) {
        const errorMessage = error.details.map((details) => details.message).join(', ');
        return responseHelper.requestfailure(res, errorMessage);
    }
    
    return next();
};

module.exports = validate;