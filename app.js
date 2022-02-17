const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//setting template engine
app.set('view engine', 'pug');
//where to find it 
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
//lets use middleware to serve static file .static is built-in middleware
//forward  request to public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {

    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(5000);
