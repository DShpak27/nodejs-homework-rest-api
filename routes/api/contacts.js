const { listContacts } = require("../../models/contacts");
// const { getContactById } = require("../../models/contacts");
// const { removeContact } = require("../../models/contacts");
// const { addContact } = require("../../models/contacts");
// const { updateContact } = require("../../models/contacts");

const express = require("express");

const contactsRouter = express.Router();

contactsRouter.get("/", async (_req, res, _next) => {
    const unparsedContacts = await listContacts();
    const contacts = JSON.parse(unparsedContacts);
    console.table(contacts);
    res.json(contacts);
});

contactsRouter.get("/:contactId", async (req, res, next) => {
    res.json({ message: "template message" });
});

contactsRouter.post("/", async (req, res, next) => {
    res.json({ message: "template message" });
});

contactsRouter.delete("/:contactId", async (req, res, next) => {
    const sad = 123;

    
    res.json({ message: "template message" });
});

contactsRouter.put("/:contactId", async (req, res, next) => {
    res.json({ message: "template message" });
});

module.exports = { contactsRouter };
