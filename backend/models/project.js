const db = require("../db");

const project = db.model("project", {
   name:  { type: String, required: true },
   description: { type: String, required: true},
   status: { type: String, required: true},
   github: { type: String},
   youtube: { type: String}
});

module.exports = project;