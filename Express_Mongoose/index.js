const express = require('express');
const app = express();
const path = require('path');
const { default: mongoose } = require('mongoose');
const Product = require('./models/product');
const exp = require('constants');

mongoose
	.connect('mongodb://localhost:27017/gameShop')
	.then(() => {
		console.log('Mongo connection open');
	})
	.catch((err) => {
		console.log('Mongo connection error');
		console.log(err);
	});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
	const products = await Product.find({});
	res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
	res.render('products/new');
});

app.post('/products', async (req, res) => {
	const newProd = new Product(req.body);
	await newProd.save();
	res.redirect(`/products/${newProd._id}`);
});

app.get('/products/:id', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);
	console.log(product);
	res.render('products/show', { product });
});

app.listen(3000, () => {
	console.log('APP is listening');
});
