// const mongoose = require("mongoose");
// const { Schema, model } = require("mongoose");
// mongoose.Promise = global.Promise;

// const connectionString =
//     "mongodb+srv://dshpak:Qweszxc11@cluster.1ppmqw0.mongodb.net/test";
// mongoose.set("strictQuery", true);

// const schema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         phone: {
//             type: String,
//             required: true,
//         },
//     },
//     { versionKey: false, timestamps: true }
// );

// const Contact = model("Contact", schema);

// const start = async () => {
//     await mongoose.connect(connectionString);
// const contact = new Contact({
//     name: "Den Shpak",
//     email: "mr.shpak@gmail.com",
//     phone: "(050) 804-0796",
// });

// await contact.save();
// await Contact.create({
//     name: "Den Shpak",
//     email: "mr.shpak@gmail.com",
//     phone: "(050) 804-0796",
// });

// await Contact.findByIdAndRemove("63fdfcec3cb5da21bf012c1f");

//     await mongoose.disconnect();
// };

// start();
