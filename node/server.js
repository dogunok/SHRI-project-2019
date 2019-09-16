const express = require('express');
const port = 3003;
const app = express();
const routes = require('./routes/routes');

app.use(express.static('static'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
routes(app)



const server = app.listen(port, err => {
    if(err) throw console.log(`error - ${err}`)
    console.log(`Server listening on port ${server.address().port}`);
});

