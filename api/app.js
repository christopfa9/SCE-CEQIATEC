const routes = require('./routes/routes')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 8080;
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});