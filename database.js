var mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/supermercados";

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("Connected");
}).catch(() => {
    console.log("Not connected");
});

module.exports = mongoose;