const pets = ['dog', 'cat', 'snake'];
pets.push('elephant')
console.log(pets); // ["dog", "cat", "snake", "elephant"]

const addedPets = ['mouse', 'eagle', 'wale'];
pets.push.apply(pets, addedPets);
console.log(pets); // ["dog", "cat", "snake", "elephant", "mouse", "eagle", "wale"]
