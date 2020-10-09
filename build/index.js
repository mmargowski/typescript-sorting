"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log('Sorted number[] ', numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('aZdfBVy');
charactersCollection.sort();
console.log('Sorted string ', charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
console.log('Sorted linkedList');
linkedList.sort();
linkedList.print();
