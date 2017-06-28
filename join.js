// Array.prototype.join()

const array = ['Jack', 'Jones', 'Jordan'];

console.log(`${array[0]} ${array[1]} ${array[2]}`);
// Better with .join() :
console.log(array.join(' '));

const words = 'jack Jones';

const upperWords =
  words
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(upperWords);

const help = [
  'start a working area (see also: git help tutorial)',
  '   clone      Clone a repository into a new directory',
  '   init       Create an empty Git repository or reinitialize an existing one'
];

console.log(help.join('\n'));
