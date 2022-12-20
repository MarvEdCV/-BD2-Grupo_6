const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const pacientesRoutes = require('./routes/pacientes');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(db => console.log('Mongo is connected'))
    .catch(err => console.log(err));
//settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/pacientes',pacientesRoutes);





//Start server
app.listen(app.get('port'), () => {
    console.log(`Server up on port -> ${app.get('port')}`)
});
