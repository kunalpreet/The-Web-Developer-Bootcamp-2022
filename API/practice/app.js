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

const fetchBitcoin = async () => {
	try {
		const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
		const data = await res.json();
		console.log(data.ticker.price);
	} catch (e) {
		console.log('something went wrong');
	}
};
