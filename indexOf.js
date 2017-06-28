// Array.prototype.indexOf()

const names = ['Jack', 'Kittie', 'Jordan', 'RJ'];

console.log(names.indexOf('Jordan'));
console.log(names.indexOf('Kittie', 1));

if (!names.indexOf('Jason') > -1) {
  names.push('Jason');
}
console.log(names.indexOf('Jason'));

const jack = {
        name: 'Jack'
      },
      kittie = {
        name: 'Kittie'
      },
      jordan = {
        name: 'Jordan'
      };

const group = [jack, kittie, jordan];
console.log(group.indexOf(jordan));

const whitelist = ['.css', '.js'],

      events = [
        {
          file: 'css/main.css'
        },
        {
          file: 'js/app.js'
        },
        {
          file: 'index.html'
        }
      ];

const filtered = events.filter(event => {
  const ext = require('path').extname(event.file); // node.js module
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
