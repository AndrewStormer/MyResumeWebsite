const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abstormer97:fpPXY0TnP3AAAIUd@cluster0.c79rivo.mongodb.net/", {dbName: "Portfolio"});
module.exports = mongoose;