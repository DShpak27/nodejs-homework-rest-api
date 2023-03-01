const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("strictQuery", true);

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: /^[a-zA-Z]+([ -][a-zA-Z]+)*$/,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        favorite: {
            type: Boolean,
            required: true,
        },
    },
    { versionKey: false }
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
