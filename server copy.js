const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const routerApi = require("./api");
app.use("/api", routerApi);

app.use((_, res, __) => {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Use api on routes: /api/tasks",
        data: "Not found",
    });
});

app.use((err, _, res, __) => {
    console.log(err.stack);
    res.status(500).json({
        status: "fail",
        code: 500,
        message: err.message,
        data: "Internal Server Error",
    });
});

mongoose.set("strictQuery", true);

const PORT = 3000;

const connection = mongoose.connect(process.env.CONNECTION_STRING);

connection
    .then(() => {
        app.listen(PORT, function () {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    })
    .catch((err) =>
        console.log(`Server not running. Error message: ${err.message}`)
    );
