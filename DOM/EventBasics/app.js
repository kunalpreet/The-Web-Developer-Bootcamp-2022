const btn = document.querySelector('#v2');
btn.onclick = function() {
	console.log('you clicked me');
};

function scream() {
	console.log('hello');
}

btn.onmouseenter = scream;
