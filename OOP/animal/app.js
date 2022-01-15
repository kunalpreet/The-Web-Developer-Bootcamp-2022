class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	eat() {
		return `${this.name} is eating`;
	}
}

class Dog extends Pet {
	meow() {
		return 'MEOWWWW';
	}
}

class Cat extends Pet {
	bark() {
		return 'WOOFFF';
	}
}

const d = new Dog('ansh', 21);
