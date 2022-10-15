const express = require("express");
require("dotenv").config();
const PersonRouter = require('./routes/PersonRoutes')
const Person = require("./models/Person");
const connectDB = require("./config/connectDB");
const app = express();

connectDB();
app.use(express.json())
app.use('/api/people',PersonRouter)

const port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
