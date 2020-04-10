const express = require("express");
const app = express();
const morgan = require("morgan");


app.set("port", process.env.PORT || 3000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(require("./router/routes"));

app.listen(app.get("port"), () => {
    console.log("Escuchando en el puerto " + app.get("port"));
});


