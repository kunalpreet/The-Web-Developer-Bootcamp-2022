const form = document.querySelector('form');
const input = document.querySelector('#dogname');
const list = document.querySelector('#list');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (input.value === '') {
		return;
	}
	console.log(input.value);
	const dogName = input.value;
	const newLi = document.createElement('LI');
	newLi.innerText = dogName;
	list.append(newLi);
	input.value = '';
});
