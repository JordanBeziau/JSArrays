// Array.prototype.map()

const numbers = ['1', '2', '3', '4', '5'];
var mapped = numbers.map(number => Number(number));

console.log(numbers); // ["1", "2", "3", "4", "5"]
console.log(mapped); // [1, 2, 3, 4, 5]

const entries = ['  Jack', 'Jason ', ' RJ'];
mapped = entries.map(entry => entry.trim());

console.log(entries); // ["  Jack", "Jason ", " RJ"]
console.log(mapped); // ["Jack", "Jason", "RJ"]

const names = ['Jack', 'JB', 'Jim'];
mapped = names.map(name => {
  return {
    firstname: name
  };
});

console.log(names);
console.log(mapped);

var persons = [
  {
    firstname: 'Jack',
    lastname: 'Reacher'
  },
  {
    firstname: 'Jason',
    lastname: 'White'
  }
];

mapped = persons.map(person => {
  return {
    firstname: person.firstname,
    lastname: person.lastname,
    fullname: person.firstname + ' ' + person.lastname
  }
});

var items = mapped.map(item => item.fullname);

console.log(renderList(items));

function renderList(array) {
  const element = array
    .map(item => `  <li>${item}</li>`)
    .join('\n');

  return `<ul>\n${element}\n</ul>`;
}

persons = [
  {
    name: 'Jack',
    active: true
  },
  {
    name: 'Jason',
    active: true
  },
  {
    name: 'Jim',
    active: true
  },
  {
    name: 'Jamie',
    active: false
  },
  {
    name: 'Roger',
    active: false
  }
];

mapped = persons
  .filter(person => person.active)
  .map(person => person.name);

console.log(renderList(mapped));
