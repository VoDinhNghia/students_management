const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
require('./config/Config').connectDB.mongoDB;

app.use(cors(require('./config/WhiteList').corsOptionsDelegate));

const documentAPI = require('../src/routers/DocRouter');
const UserRouter = require('../src/routers/UserRouter');
const CountriesRouter = require('../src/routers/CountriesRouter');
const FacultyRouter = require('../src/routers/FacultyRouter');
const MajorsRouter = require('../src/routers/MajorsRouter');

app.use(express.json());
app.use('/api-docs', documentAPI);
app.use('/api/user', UserRouter);
app.use('/api/country', CountriesRouter);
app.use('/api/faculty', FacultyRouter);
app.use('/api/majors', MajorsRouter);

const port = require('./config/Config').port;
app.listen(port, () => {
    console.log(`Hello, I'm running at localhost:${port}/`);
});