const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productmanagerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection ESTABLISHED."))
    .catch(err => console.log("DB connection ERROR.", err));