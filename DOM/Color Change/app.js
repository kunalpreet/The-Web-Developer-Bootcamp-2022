const btn = document.querySelector('button');
btn.addEventListener('click', changeColor);

function changeColor() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const newColor = `rgb(${r}, ${g}, ${b})`;
	document.body.style.background = newColor;
}
