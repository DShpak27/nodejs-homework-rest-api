const express = require("express");
const router = express.Router();
const ctrlContact = require("../controller");

router.get("/contacts", ctrlContact.get);

router.get("/contacts/:id", ctrlContact.getById);

router.post("/contacts", ctrlContact.create);

router.patch("/contacts/:id", ctrlContact.update);

router.delete("/contacts/:id", ctrlContact.remove);

module.exports = router;
