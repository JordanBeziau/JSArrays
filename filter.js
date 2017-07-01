// Array.prototype.filter()

const items = [1, 2, 3, 4, 5];
var filtered = items.filter(item => item > 2);
console.log(items);
console.log(filtered); // [3, 4, 5]

const people = [
 {
   name: 'Jack',
   pets: ['dog', 'fish']
 },
 {
   name: 'Jason',
   pets: ['horse']
 },
 {
   name: 'Jim',
   pets: []
 }
];
filtered = people.filter(people => people.pets.length);
console.log(filtered); // return people have pet(s)

const lessons = [
 {
   title: 'Javascript Array method in depth - join',
   views: 940,
   tags: ['array', 'join']
 },
 {
   title: 'Javascript Array method in depth - concat',
   views: 1043,
   tags: ['array', 'concat']
 },
 {
   title: 'Javascript Array method in depth - slice',
   views: 1239,
   tags: ['array', 'slice']
 },
 {
   title: 'Javascript Functions in depth - bind',
   views: 2346,
   tags: ['functions', 'bind']
 }
];

const minViews = 1000,
     tagSearch = 'array';

filtered = lessons
 .filter(lesson => lesson.tags.indexOf(tagSearch) > -1 && lesson.views > minViews)
 .sort((a, b) => b.views - a.views)
 .map(lesson => `  <li>${lesson.title}</li>`)
 .join('\n');

console.log(`<ul>\n${filtered}\n</ul>`);

/* Output
  "<ul>
   <li>Javascript Array method in depth - slice</li>
   <li>Javascript Array method in depth - concat</li>
  </ul>"
*/
