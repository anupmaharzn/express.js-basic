const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
//lets use middleware to serve static file .static is built-in middleware
//forward  request to public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);
