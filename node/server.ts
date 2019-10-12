const express = require('express');
const cors = require('cors');
const routerModule = require('./routes/routes');
const port: number = 3003;
const app = express();



app.use(cors());
app.use(express.static('static'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routerModule(app);



const server = app.listen(port, (err: Error) => {
    if(err) throw console.log(`error - ${err}`);
    console.log(`Server listening on port ${server.address().port}`);
});

