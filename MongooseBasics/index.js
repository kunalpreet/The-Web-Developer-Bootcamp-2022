const { default: mongoose } = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/movieApp')
	.then(() => {
		console.log('Connection open');
	})
	.catch((err) => {
		console.log('error');
		console.log(err);
	});

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const Interstellar = new Movie({ title: 'Interstellar', year: 2017, score: 8.6, rating: 'R' });

// Movie.insertMany([
// 	{ title: 'batman', year: 2007, score: 9.0, rating: 'R' },
// 	{ title: 'avengers', year: 2012, score: 8.1, rating: 'R' },
// 	{ title: 'Interstellar', year: 2017, score: 8.6, rating: 'R' }
// ]).then((data) => {
// 	console.log('IT WORKED');
// 	console.log(data);
// });
