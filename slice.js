// Array.prototype.slice()

const array = [1, 2, 3, 4, 5];

console.log(array.slice(3)); // [4, 5]
console.log(array.slice(-2)); // [4, 5]
console.log(array.slice(3, 5)); // [4, 5]

const person = { name: 'Jack' },
      items = [1, person];

const copy = items.slice();
copy[1].name = 'Conan';

console.log(person); // { name: 'Conan' }
console.log(copy); // [1, { name: 'Conan' }]

person.name = 'jack-reacher';
const filters = {
  'deslugify': str => str.replace('-', ' '),
  'uppercase': str => str.toUpperCase()
};

const input = 'name | deslugify | uppercase'; // JACK REACHER

const sections = input.split('|').map(i => i.trim()); // ['name', 'deslugify', 'uppercase']

const ref = person[sections[0]];

const output = sections
  .slice(1)
  .reduce((prev, next) => {
    if (filters[next]) {
      return filters[next].call(null, prev);
    }
    return prev;
  }, ref);

console.log(output); // JACK REACHER
