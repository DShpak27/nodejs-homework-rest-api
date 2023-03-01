const service = require("../service");

const get = async (_req, res, next) => {
    try {
        const contacts = await service.listContacts();
        res.json({
            status: "success",
            code: 200,
            data: {
                contacts: contacts,
            },
        });
    } catch (e) {
        console.error(e);
        next(e);
    }
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const contact = await service.getContactById(id);
        if (contact) {
            res.json({
                status: "success",
                code: 200,
                data: { contact: contact },
            });
        } else {
            res.status(404).json({
                status: "error",
                code: 404,
                message: `No contact found with this ID: ${id}`,
                data: "Not Found",
            });
        }
    } catch (e) {
        console.error(e);
        next(e);
    }
};

const create = async (req, res, next) => {
    const { name, email, phone } = req.body;
    try {
        const contact = await service.addContact({ name, email, phone });

        res.status(201).json({
            status: "success",
            code: 201,
            data: { contact: contact },
        });
    } catch (e) {
        console.error(e);
        next(e);
    }
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const contact = await service.updateContact(id, body);
        if (contact) {
            res.json({
                status: "success",
                code: 200,
                data: { contact: contact },
            });
        } else {
            res.status(404).json({
                status: "error",
                code: 404,
                message: `No contact found with this ID: ${id}`,
                data: "Not Found",
            });
        }
    } catch (e) {
        console.error(e);
        next(e);
    }
};

const remove = async (req, res, next) => {
    const { id } = req.params;

    try {
        const contact = await service.removeContact(id);
        if (contact) {
            res.json({
                status: "success",
                code: 200,
                data: { contact: contact },
            });
        } else {
            res.status(404).json({
                status: "error",
                code: 404,
                message: `No contact found with this ID: ${id}`,
                data: "Not Found",
            });
        }
    } catch (e) {
        console.error(e);
        next(e);
    }
};

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
};
