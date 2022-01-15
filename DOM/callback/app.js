setTimeout(() => {
	document.body.style.backgroundColor = 'red';
	setTimeout(() => {
		document.body.style.backgroundColor = 'orange';
		setTimeout(() => {
			document.body.style.backgroundColor = 'yellow';
		}, 1000);
	}, 1000);
}, 1000);
