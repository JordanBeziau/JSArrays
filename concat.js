// Array.prototype.concat()

let array = [4, 5, 6];

array = array.concat(7, 8, [9, 10]);
console.log(array);

// Note that [[5, 6]] will just concat the first array not the nested one.
console.log([3, 4].concat([[5, 6]]));

let people = [
  {
    name: 'Jordan'
  },
  {
    name: 'John'
  }
];

const people2 = [
  {
    name: 'Paul'
  },
  {
    name: 'Jack'
  }
];

people
  .concat(people2)
  .forEach(people => console.log(people.name));
