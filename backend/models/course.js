const db = require("../db");

const course = db.model("course", {
   department:  { type: String, required: true },
   number:  { type: Number, required: true },
   name:  { type: String, required: true},
   grade: { type: String, required: true},
   link: { type: String, required: true}
});

module.exports = course;