const forms = document.querySelector('#searchform');
forms.addEventListener('submit', async function(e) {
	e.preventDefault();
	const searchTerm = forms.elements.query.value;
	const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
	displayImg(res.data);
	forms.elements.query.value = '';
});

const displayImg = (shows) => {
	for (let resShow of shows) {
		if (resShow.show.image) {
			const img = document.createElement('IMG');
			img.src = resShow.show.image.medium;
			document.body.append(img);
		}
	}
};
