const express = require('express');
const app = express();

// app.use((req, res) => {
// 	console.log('We got a new request');
// 	res.send('<h1>hello</h1>');
// });

app.get('/', (req, res) => {
	res.send('<h1>Hello to my Webpage</h1>');
});

app.get('/r/:subreddit', (req, res) => {
	res.send(`Your are in the ${req.params.subreddit} subreddit`);
});

app.post('/dragon', (req, res) => {
	res.send('This is different');
});

app.get('/dogs', (req, res) => {
	res.send('Woof');
});

app.get('/dragon', (req, res) => {
	res.send('dracarys');
});

app.listen(3000, () => {
	console.log('Listening');
});
