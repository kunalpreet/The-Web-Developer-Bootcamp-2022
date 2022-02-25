const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/shopApp')
	.then(() => {
		console.log('Connection open');
	})
	.catch((err) => {
		console.log('error');
		console.log(err);
	});

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
        required: true
	}
});

const Product = mongoose.model('Product', productSchema);

const laptop = new Product({ name: 'macbook', price: 1500 });
laptop
	.save()
	.then((data) => {
		console.log('It worked');
		console.log(data);
	})
	.catch((err) => {
		console.log('error');
		console.log(err);
	});
