const Joi = require("joi");

const contactCreateSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)
        .required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
        .pattern(/^(\+)?(38)?([0-9]{10})$/)
        .required(),
    favorite: Joi.boolean(),
}).max(4);

const updateContactSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)
        .required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
        .pattern(/^(\+)?(38)?([0-9]{10})$/)
        .required(),
    favorite: Joi.boolean(),
}).max(4);

module.exports = {
    contactCreateSchema,
    updateContactSchema,
};
