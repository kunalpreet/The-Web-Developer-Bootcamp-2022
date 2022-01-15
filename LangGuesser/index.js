import { franc } from 'franc';
import { data } from './data.js';

const codes = data();

const text = process.argv[2];
console.log(`Text: ${text}`);
const f = franc(text);

if (f === 'und') {
	console.log('Enter longer text');
} else {
	for (let i = 0; i < codes.length; i++) {
		if (f === codes[i][3]) {
			console.log(`Language is : ${codes[i].name}`);
			break;
		}
	}
}
