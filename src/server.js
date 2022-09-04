const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

const UserRouter = require('../src/routers/UserRouter');
require('./config/Config').connectDB.mongoDB;

app.use(express.json());

app.use('/api/user', UserRouter)

const port = require('./config/Config').port;
app.listen(port, () => {
    console.log(`Hello, I'm running at localhost:${port}/`);
});