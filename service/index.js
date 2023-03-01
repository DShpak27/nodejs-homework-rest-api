const Contact = require("./schemas/contact");

async function listContacts() {
    return Contact.find();
}

async function getContactById(contactId) {
    return Contact.findOne({ _id: contactId });
}

async function addContact({ name, email, phone }) {
    return Contact.create({ name, email, phone });
}

async function updateContact(id, body) {
    return Contact.findByIdAndUpdate({ _id: id }, body, { new: true });
}

async function removeContact(contactId) {
    return Contact.findByIdAndRemove({ _id: contactId });
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
};
