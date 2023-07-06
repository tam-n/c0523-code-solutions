import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

// destructure command-line arguments
const [, , value1, operation, value2] = process.argv;

// convert the values from strings into an integer
const num1 = parseInt(value1);
const num2 = parseInt(value2);

let result;

// perform appropriate operations using the imported modules
operation === 'plus'
  ? (result = add(num1, num2))
  : operation === 'minus'
  ? (result = subtract(num1, num2))
  : operation === 'times'
  ? (result = multiply(num1, num2))
  : operation === 'over'
  ? (result = divide(num1, num2))
  : (result = 'Invalid operation');

console.log('result:', result);
