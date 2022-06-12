const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require("./models");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT_NUMBER;
const bodyparser = require('body-parser');
const userRaute = require('./routes/userRaute');
// app.get("/", (req, resp) => {
//     resp.send("Home page");
// })
app.use(cors())
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/user', userRaute);

app.listen(port, () => {
    console.log(`App is listening at port http://localhost:${port}`);
})

module.exports = app;