'use strict';


// 		1) Написать функцию, которая входным параметром берёт массив чисел 
//         и возвращает наибольшее из них.


// let numbers = [642, 543, 123, 581, 5433, 1222, 1124, 1, 654, 1410, 992, 1211];


// let getLargestNumber = function(arr) {

// 	let sorted = arr.sort(function(a,b) {
// 		return b - a;
// 	}) 
// 	return sorted[0];
// };

// console.log(getLargestNumber(numbers));


 // 	2) Написать функцию, с одним параметром, которая выводит в консоль сообщение
 // 	   с типом данных этого параметра, сообщением "Это массив", "Это строка". 

// let getType = function(thing) {
// 	if {
// 		typeof(thing) = '';
// 		console.log('Это строка')
// 	} else if {
// 		typeof(thing) = null;
// 		console.log('Это Null')
// 	} else if {
// 		typeof(thing) = Object;
// 		console.log('Это объект')
// 	} else if {
// 		typeof(thing) = Number;
// 		console.log('Это число')
// 	} else if {
// 		typeof(thing) = undefined;
// 		console.log('Это неопределенное значение')
// 	} else if {
// 		typeof(thing) = Array;
// 		console.log('Это массив');
// 	} else {
// 		typeof(thing) = Boolean;
// 		console.log('Это логический тип данных');
// 	}
// };

// console.log(getType('строка'));


// let name = 'John';




// function getType(vars) {
// 	console.log(typeof vars);
// };

// getType(human.age);

// let human = {
// 	name: 'Myroslav',
// 	age: 25,
// 	pets: true,
// 	food: ['kasha', 'itsy', 'hlebushek'],
// 	sayHi: function() {
// 		console.log('Вздрыжни');
// 	},
// 	symbol: "®",
// }

// let getType = function(item) {

// 	if(Array.isArray(item)) {
// 		return console.log('Это массив');
// 	} else {
// 		switch (typeof(item)) {
// 			case 'string':
// 			console.log("Это строка");
// 			break;

// 			case 'number':
// 			console.log('Это число');
// 			break;

// 			case 'object':
// 			console.log('Это объект');
// 			break;

// 			case 'boolean':
// 			console.log('Это логический тип данных');
// 			break;

// 			case 'function':
// 			console.log('Это функция');

// 			case 'symbol':
// 			console.log('Это Символ');
// 			break;
// 		};
// 	}
// }

// getType(human);
// getType(human.name);
// getType(human.age);
// getType(human.pets);
// getType(human.food);
// getType(human.sayHi);






// console.log(vapeJuices);


//- Нужно написать функцию, которая вернёт 
//  массив отсутствующих в наличии предметов. 
//  (Ей параметром передаётся весь список)

// let getNotAvailableItem = function(vapeJuices) {
// 	vapeJuices.forEach(function(item, index, array) {
// 		if () {
// 			item.available = false;
// 			return item;
// 		} else {
// 			continue;
// 		}	
// 	})
// };

// getNotAvailableItem(vapeJuices);


// let getUnavailableItems = function(items) {
// 	let unavailables = vapeJuices.filter(function(item) {
// 		return item.available === false;
// 	})
// 	return unavailables;
// }

// getUnavailableItems(vapeJuices);

let human = {
	name: 'Miroslav',
	age: 20,
	greetings: function() {
		console.log('Hello yeah')
	},
	pets: ['kitska', 'Mishka', 'Lozhka', 'Krychka'],
}


let vapeJuices = [
  {
    brand: 'Smoky Mix',
    title: 'Citrus Cake',
    price: 55,
    available: true,
    rating: 4,
    currency: 'UAH',
  },
  {
    brand: 'Bevape',
    title: 'Mint Ice Cream',
    price: 65,
    available: true,
    rating: 4,
    currency: 'UAH',
  },
  {
    brand: 'Soft Vapor',
    title: 'Mango + Ice',
    price: 150,
    available: false,
    rating: 4,
    currency: 'UAH',
  },
  {
    title: 'Cactus Lime',
    price: 65,
    available: false,
    rating: 5,
    currency: 'UAH',
  },
  {
    title: 'Solar Shock',
    price: 55,
    available: true,
    rating: 3,
    currency: 'UAH',
  },
  {
    title: 'Strawberry',
    price: 140,
    available: true,
    rating: 5,
    currency: 'UAH',
  },
  {
    brand: 'Soft Vapor',
    title: 'Melon',
    price: 140,
    available: true,
    rating: 5,
    currency: 'UAH',
  },
];

let setUnknownBrand = function(catalog) {
	catalog.forEach(function(item) {
		if (!item.hasOwnProperty('brand')) {
			Object.defineProperty(item, 'brand', {
				enumerable: true,
				value: 'Неизвестнейший бренд',
			});
		};
	});
}
setUnknownBrand(vapeJuices);
// - Необходимо спроектировать класс Catalog. 
// Конструктор входным параметром принимает некий массив объектов (vapeJuices). 
// У класса есть интерфейсные методы: 
// + getAvaiableItems, (вовзращает массив предметов в наличии)
// + getSortedFromHighToLowPrice, (возвращает массив отсортированных по цене от максимальной к минимальной)
// + getSortedFromLowToHighPrice, (Так же, только наоборот)
// + getHighestPriceItem, (возвращает самый дорогой предмет (объект))
// + getLowestPriceItem, (так, же но минимальной цены)
// + getCatalogName, (возвращает строку с названием каталога (Best Vape Juices!))
// + getBrands (возвращает массив строк (названий брендов))

// Создаём экземпляр класса (через оператор new), 
// указываем ему параметром наш массив, 
// и вызываем у него поочерёдно созданные методы (в консоль), 
// которые отдадут нам нужные данные


// function Catalog(vapeJuices) {
// 	this.title = 'Best Vape Juices';
// 	this.items = vapeJuices;

// 	this.getCatalogName = function() {
// 			return this.title;
// 		};

// 	this.getAvailableItems = function() {
// 		return this.items.filter(function(item) {
// 			return item.available;
// 		})
// 	};

// 	this.getSortedFromHighToLowPrice = function() {
// 		return this.items.slice().sort(function(a,b) {
// 			return b.price - a.price;
// 		})
// 	};

// 	this.getSortedFromLowToHighPrice = function() {
// 		return this.items.slice().sort(function(a,b) {
// 			return a.price - b.price;
// 		})
// 	};

// 	this.getHighestPriceItem = function() {
// 		let highestPriceItem = this.items.slice().sort(function(a, b) {
// 			return b.price - a.price;
// 		})

// 		return highestPriceItem[0];
// 	};

// 	this.getLowestPriceItem = function() {
// 		let lowestPriceItem = this.items.slice().sort(function(a, b) {
// 			return a.price - b.price;
// 		})
// 		return lowestPriceItem[0];
// 	};

// 	this.getBrands = function() {
// 		// return this.items.map(function(item) {
// 		// 	return item.brand;
// 		// })
// 		return this.items
// 			.map(function(item) {
// 				return item.brand
// 			})
// 			.filter((item, index, array) =>array.inndexOf(item) === index;


// 	};
// }

// let vapeCatalog = new Catalog(vapeJuices);

// console.log('Sorted from Low to High: ',vapeCatalog.getSortedFromLowToHighPrice());
// console.log('Sorted from High to Low: ',vapeCatalog.getSortedFromHighToLowPrice());
// console.log('Available items: ',vapeCatalog.getAvailableItems());
// console.log('Highest price item: ',vapeCatalog.getHighestPriceItem());
// console.log('Lowest price item: ',vapeCatalog.getLowestPriceItem());
// console.log('Brand list: ', vapeCatalog.getBrands());



//- Нужно написать функцию, которая вернёт сумму всех переданных
// ей аргументов (n штук), если аргумент не число - 
//просто пропустит его



// function summArguments() {
// 	let arrArg = Array.from(arguments);

// 	let result = 0;
// 	for(let i = 0; i < arrArg.length; i++) {
// 		result += arrArg[i];
// 	}
// 	return result;
// }


// console.log(summArguments(1,2,3,5,6,7));


// defineProperty (дескриптор)
// hasOwnProperty (проверка на то, есть ли у объекта такое свойство)
// create ()


// 
// Object.defineProperty(human, 'name', {
// 	enumerable: false,
// 	writable: false,
// 	value: 'Myra',
// });

// console.log(human);

// console.log(human.hasOwnProperty('age'));


// ДЕСТРУКТУРИЗАЦИЯ
// const woman =  {
// 	legs: 2,
// 	hair: 'red',
// 	titties: 'nice',
// 	greeting: function() {
// 		console.log('ёп твою за ногу, где ты был всю ночь')
// 	},
//  };
// const {greeting, hair, titties, legs} = woman;
// console.log(titties);


// function User (name, id, isAdmin) {
// 	this.name = name;
// 	this.id = id;
// 	this.greetings = function() {
// 		console.log('Привет! Меня зовут ' + this.name);
// 	}
// }

// let Anton = new User('Anton', 1);

// console.log(Anton);
// Anton.greetings();


// Привязка контекста вызова

// let user = {
// 	name: 'John'
// }

// function sayName() {
// 	console.log(this);
// }


// // console.log(sayName.call(user));
// console.log(sayName.apply(user));



function random(n) {
	console.log(Math.random(n));
}

random(10);


















