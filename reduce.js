const numbers = [1, 2, 3, 4, 5];
var log = numbers.reduce((prev, number) => {
  console.log('prev', prev, 'number', number);
  return prev + number;
});
console.log(log);

const albums = [
  {
    title: 'Holiday in Canada',
    images: ['01.jpg', '02.jpg']
  },
  {
    title: 'House renovation',
    images: ['03.jpg', '04.jpg', '05.jpg']
  }
];

log = albums.reduce((prev, album) => {
  return prev + album.images.length;
}, 0); // using 0 to initialise prev value or prev = {object}...
console.log(log);

log = albums.reduce((array, album) => {
  return array.concat(album.images);
}, []);
console.log(log);

const users = [
  {
    id: '01',
    name: 'Jack'
  },
  {
    id: '02',
    name: 'Jim'
  }
];

log = users.reduce((object, user) => {
  object[user.id] = user;
  return object;
}, {});
console.log(log);

/* LOGS
prev 1 number 2                                                     
prev 3 number 3                                                     
prev 6 number 4                                                     
prev 10 number 5                                                    
15                                                                  
5                                                                   
[ '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg' ]                
{ '01': { id: '01', name: 'Jack' },                                 
  '02': { id: '02', name: 'Jim' } }
*/
