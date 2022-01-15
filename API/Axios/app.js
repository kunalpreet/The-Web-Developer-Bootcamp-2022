// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// 	.then((res) => {
// 		console.log('RESPONSE', res);
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log('Data parses');
// 		console.log(data.ticker.price);
// 	})
// 	.catch((e) => {
// 		console.log('Error: ', e);
// 	});

// axios
// 	.get('https://api.cryptonator.com/api/ticker/btc-usd')
// 	.then((res) => {
// 		console.log(res.data.ticker.price);
// 	})
// 	.catch((e) => {
// 		console.log('error');
// 	});

const fetchBitcoin = async () => {
	try {
		const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
		console.log(res.data.ticker.price);
	} catch (e) {
		console.log('error');
	}
};

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
	const jokeText = await getDadJoke();
	const newLi = document.createElement('LI');
	newLi.append(jokeText);
	jokes.append(newLi);
};

const getDadJoke = async () => {
	const config = { headers: { Accept: 'application/json' } };
	const res = await axios.get('https://icanhazdadjoke.com/', config);
	return res.data.joke;
};

button.addEventListener('click', addJoke);
