const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const generateUniqueId = () => nanoid(5);

const contactsFilePath = path.join(__dirname, "contacts.json");

async function listContacts() {
    try {
        const unparsedContacts = fs.readFile(contactsFilePath, "utf8");
        // const contacts = JSON.parse(unparsedContacts);
        return unparsedContacts;
    } catch (error) {
        return error.message;
    }
}

async function getContactById(contactId) {
    try {
        const unparsedContacts = fs.readFile(contactsFilePath, "utf8");
        const contacts = JSON.parse(unparsedContacts);
        const contactById = contacts.find(({ id }) => id === contactId);
        return contactById;
    } catch (error) {
        return error.message;
    }
}

async function removeContact(contactId) {
    try {
        const unparsedContacts = fs.readFile(contactsFilePath, "utf8");
        const contacts = JSON.parse(unparsedContacts);
        const updatedContacts = contacts.filter(({ id }) => id !== contactId);
        const unparsedUpdatedContacts = JSON.stringify(updatedContacts);
        await fs.writeFile(contactsFilePath, unparsedUpdatedContacts);
    } catch (error) {
        return error.message;
    }
}

async function addContact(body) {
    const newContact = { ...body, id: generateUniqueId() };
    try {
        const unparsedContacts = fs.readFile(contactsFilePath, "utf8");
        const contacts = JSON.parse(unparsedContacts);
        const updatedContacts = [newContact, ...contacts];
        const unparsedUpdatedContacts = JSON.stringify(updatedContacts);
        await fs.writeFile(contactsFilePath, unparsedUpdatedContacts);
        return newContact;
    } catch (error) {
        return error.message;
    }
}

async function updateContact(contactId, body) {
    try {
        const unparsedContacts = fs.readFile(contactsFilePath, "utf8");
        const contacts = JSON.parse(unparsedContacts);
        const contactToUpdate = contacts.find(({ id }) => id === contactId);
        const updatedContact = { ...contactToUpdate, ...body };
        const contactsToUpdate = contacts.filter(({ id }) => id !== contactId);
        const updatedContacts = [...contactsToUpdate, updatedContact];
        const unparsedUpdatedContacts = JSON.stringify(updatedContacts);
        await fs.writeFile(contactsFilePath, unparsedUpdatedContacts);
        return updatedContact;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
