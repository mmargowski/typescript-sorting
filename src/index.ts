import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log('Sorted number[] ', numbersCollection.data);

const charactersCollection = new CharactersCollection('aZdfBVy');
charactersCollection.sort();
console.log('Sorted string ', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
console.log('Sorted linkedList');
linkedList.sort();
linkedList.print();
