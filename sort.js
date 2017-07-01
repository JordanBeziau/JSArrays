// Array.prototype.sort()

var array = [ 'Jack', 'Roger', 'Jason', 'Jim' ];
console.log(array.sort()); // ["Jack", "Jason", "Jim", "Roger"]
console.log(array.sort((a, b) => a.length - b.length)); // ["Jim", "Jack", "Jason", "Roger"]

array = [20, 10, 30];
console.log(array.sort()); // [10, 20, 30]

array.splice(2, 0, 2);
console.log(array.sort()); // [10, 2, 20, 30]

var items = array
  .sort((a, b) => {
    if (a - b === 0) {
      return 0;
    }
    if (a - b < 0) {
      return -1;
    }
    if (a - b > 0) {
      return 1;
    }
});
console.log(items);

items = array.sort((a, b) => a - b);
console.log(items); // [2, 10, 20, 30]

items = array.sort((a, b) => b - a);
console.log(items); // [30, 20, 10, 2]

const lessons = [
  {
    title: 'Javascript Array method in depth - concat',
    views: 1000
  },
  {
    title: 'Javascript Array method in depth - slice',
    views: 1025
  },
  {
    title: 'Javascript Array method in depth - join',
    views: 1050
  }
];

const sort = lessons
  .sort((a, b) => b.views - a.views)
  .map(lesson => `  <li>${lesson.title} (${lesson.views})</li>`)
  .join('\n');

const output = `<ul>\n${sort}\n</ul>`;
console.log(output);
