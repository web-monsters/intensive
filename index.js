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

// let human = {
// 	name: 'Miroslav',
// 	age: 25,
// }

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
    brand: 'Bevape',
    title: 'Cactus Lime',
    price: 65,
    available: false,
    rating: 5,
    currency: 'UAH',
  },
  {
    brand: 'Smoky Mix',
    title: 'Solar Shock',
    price: 55,
    available: true,
    rating: 3,
    currency: 'UAH',
  },
  {
    brand: 'Soft Vapor',
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


let getUnavailableItems = function(items) {
	let unavailables = vapeJuices.filter(function(item) {
		return item.available === false;
	})
	return unavailables;
}

getUnavailableItems(vapeJuices);