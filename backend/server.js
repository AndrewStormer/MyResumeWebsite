const express = require("express");
const cors = require('cors');

const course = require("./models/course")
const project = require("./models/project")

const app = express();
const port = 8000;

app.use(express.json());

const corsOptions = {
   origin: "http://localhost:3000",
   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
};

app.use(cors(corsOptions));

const router = express.Router();


router.get("/courses", async function(req, res) {
    try {
        const courses = await course.find({}).sort({department: 1, number: -1}).exec();
        res.send(courses);
    } catch {
        res.status(400).send();
    }
});

router.get("/project/:name", async function(req, res) {
    console.log(req.params.name)
    try {
        const courses = await project.findOne({name: req.params.name}).exec();
        res.send(courses);
    } catch {
        console.log(req.params.name)
        res.status(400).send();
    }
});


app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});