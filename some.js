// Array.prototype.some()

const array = [1, 2, 3, 4, 5];
const some = array.some(number => number === 3);
console.log(some); // true

const tasks = [
  {
    title: 'Do laundry',
    completed: true
  },
  {
    title: 'Feed the cat',
    completed: true
  },
  {
    title: 'Watch the array lesson on egghead.io',
    completed: true
  }
];

const taskList = document.querySelector('.task-list');

taskList.classList.add(
  tasks.some(task => task.completed === false)
    ? 'task-list--uncompleted'
    : 'task-list--completed'
);

taskList.innerHTML = tasks
    .map(task => task.completed ? `<s>${task.title}</s>` : `${task.title}`)
    .map(task => `<li>${task}</li>`)
    .join('\n');

// ----------

function addTask(title) {
  if (tasks.some(task => task.title == title)) {
    // Task already exist...
    return;

  } else {
    tasks.push({title: title, completed: false});
  }
}

addTask('Feed the cat');
addTask('Feed the dog');
console.log(tasks);
