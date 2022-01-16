const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const datasb = data[subreddit];
	console.log(datasb);
	res.render('subreddit', { ...datasb });
});

app.get('/dogs', (req, res) => {
	const dogs = [ 'Hero', 'Argo', 'Sheru', 'Rambo' ];
	res.render('dogs', { dogs });
});

app.get('/rand', (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
