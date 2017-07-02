var numbers = [1, 2, 3, 4, 5];
var checked = numbers.every(number => number < 10);
console.log(checked); // true

numbers = ['1', '2', '3', 4, '5'];
checked = numbers.every(number => typeof(number) === 'string');
console.log(checked); // false

const fields = [
  {
    field: 'email',
    value: 'jackreacher@mail.com',
    errors: []
  },
  {
    field: 'name',
    value: '',
    errors: ['No name provided']
  }
];

checked = fields.every(field => field.errors.length === 0);
console.log(checked); // false

const videos = [
  {
    title: 'Array method in depth - concat',
    length: 345,
    viewed: 345
  },
  {
    title: 'Array method in depth - reduce',
    length: 430,
    viewed: 367
  }
];

function complete(x) {
  return x.length === x.viewed;
}

checked = videos.every(complete);
console.log(checked);
checked = videos.filter(complete);
console.log(checked);
