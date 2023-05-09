const colors = ['red', 'white', 'blue'];
console.log('Value of element 0:', colors[0]);
console.log('Value of element 1:', colors[1]);
console.log('Value of element 2:', colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log('The value of colors is:', colors);

const students = ['Michael', 'Dwight', 'Jim', 'Pam'];
const numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');
const lastIndex = numberOfStudents - 1;

const lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
console.log('Value of students:', students);
