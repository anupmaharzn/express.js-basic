const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

//root data file
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callback([]);
        }
        else {
            return callback(JSON.parse(fileContent));
        }

    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
};