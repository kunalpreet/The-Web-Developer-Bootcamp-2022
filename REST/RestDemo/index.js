const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
	{
		id: uuid(),
		username: 'kunal',
		comment: 'full stack is  lot'
	},
	{
		id: uuid(),
		username: 'ansh',
		comment: 'just watched spiderman for the 3rd time'
	},
	{
		id: uuid(),
		username: 'humza',
		comment: 'I am lagging'
	},
	{
		id: uuid(),
		username: 'sahil',
		comment: 'online?'
	}
];

app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
	res.render('comments/new');
});

app.post('/comments', (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment, id: uuid() });
	res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
	const { id } = req.params;
	const newComment = req.body.comment;
	const foundComment = comments.find((c) => c.id === id);
	foundComment.comment = newComment;
	res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
	res.send('GET /tacos Response');
});

app.post('/tacos', (req, res) => {
	const { meat, qty } = req.body;
	res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
	console.log('ON PORT 3000');
});
