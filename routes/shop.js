const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');
const { render } = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;

    res.render('shop', { prods: products, pageTitle: 'shop', path: '/' });
});

module.exports = router;
