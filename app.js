// підключаємо зовнішні бібліотеки
const express = require("express");
const logger = require("morgan"); // пакет налаштування логування
const cors = require("cors"); // пакет налаштування cors

// імпортуємо обробника маршрутів "/api/contacts"
const { contactsRouter } = require("./routes/api/contacts");

const app = express(); // створюємо екземпляр об'єкту express

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// підключаємо загальні middleware
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// підключаємо  middleware обробки маршрутів
app.use("/api/contacts", contactsRouter);

// підключаємо  middleware для відловлювання помилки
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

// підключаємо  middleware для обробки помилки
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = { app };
