const express = require("express");
const app = express();
const morgan = require("morgan");
const formidable = require("express-formidable");

app.set("port", process.env.PORT || 3000);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(morgan("dev"));
app.use(express.json());
app.use(require("./router/routes"));

app.listen(app.get("port"), () => {
    console.log("Escuchando en el puerto " + app.get("port"));
});


