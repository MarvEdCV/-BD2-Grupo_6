const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoRoutes = require('./routes/mongodb');
const mysqlRoutes = require('./routes/mysql');
//const cassandraRoutes = require('./routes/cassandradb');

mongoose.set('strictQuery',false);
mongoose.set('strictPopulate',false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/backend_mongodb')
    .then(db => console.log('Mongo is connected'))
    .catch(err => console.log(err));



//settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/mongo',mongoRoutes);
app.use('/mysql',mysqlRoutes);

//app.use('/cassandra', cassandraRoutes)

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server up on port -> ${app.get('port')}`)
});
