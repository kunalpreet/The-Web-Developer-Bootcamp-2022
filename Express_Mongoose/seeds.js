const { default: mongoose } = require('mongoose');
const Product = require('./models/product');

mongoose
	.connect('mongodb://localhost:27017/gameShop')
	.then(() => {
		console.log('Mongo connection open');
	})
	.catch((err) => {
		console.log('Mongo connection error');
		console.log(err);
	});

// const p = new Product({
// 	name: 'Call of Duty',
// 	price: 59.99,
// 	category: 'Shooter'
// });

// p
// 	.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const seedProducts = [
	{
		name: 'Call of Duty',
		price: 69.99,
		category: 'Shooter'
	},
	{
		name: 'Fifa 22',
		price: 59.99,
		category: 'Sports'
	},
	{
		name: 'Grand Theft Auto 5',
		price: 59.99,
		category: 'Shooter'
	},
	{
		name: 'God of War',
		price: 19.99,
		category: 'Action-Adventure'
	}
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});
