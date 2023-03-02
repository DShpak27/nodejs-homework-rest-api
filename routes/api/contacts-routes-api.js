const mongoose = require("mongoose");
const service = require("../../models/contacts-mongodb");
const express = require("express");
const router = express.Router();
const { makeMessage } = require("./helpers/contacts-helpers");

const {
    contactCreateSchema,
    updateContactSchema,
} = require("../../validators/contacts-requests-validation");

const commonHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (e) {
        if (
            e instanceof mongoose.Error.ValidationError ||
            e instanceof mongoose.Error.StrictModeError ||
            e instanceof mongoose.Error.CastError
        ) {
            res.status(400).json(makeMessage(e));
        } else {
            next(e);
        }
    }
};

router.get(
    "/contacts",
    commonHandler(async (_req, res, _next) => {
        const contacts = await service.listContacts();
        res.status(200).json(contacts);
    })
);

router.get(
    "/contacts/:id",
    commonHandler(async (req, res, _next) => {
        const { id } = req.params;
        const contact = await service.getContactById(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({
                message: `No contact found with this ID: ${id}`,
            });
        }
    })
);

router.post(
    "/contacts",
    commonHandler(async (req, res, _next) => {
        const { error } = contactCreateSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }
        const { name, email, phone, favorite } = req.body;
        const contact = await service.addContact({
            name,
            email,
            phone,
            favorite,
        });
        res.status(201).json(contact);
    })
);

router.patch(
    "/contacts/:id",
    commonHandler(async (req, res, _next) => {
        const { error } = updateContactSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }
        const { id } = req.params;
        const { body } = req;
        const contact = await service.updateContact(id, body);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({
                message: `No contact found with this ID: ${id}`,
            });
        }
    })
);

router.delete(
    "/contacts/:id",
    commonHandler(async (req, res, _next) => {
        const { id } = req.params;
        const contact = await service.removeContact(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({
                message: `No contact found with this ID: ${id}`,
            });
        }
    })
);

module.exports = router;
